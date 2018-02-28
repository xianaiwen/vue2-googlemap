<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-polyline",
  data() {
    return {};
  },
  props: {
    path: Array,
    clickable: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    geodesic: Boolean,
    strokeColor: String,
    strokeOpacity: Number,
    strokeWeight: Number,
    visible: {
      type: Boolean,
      default: true
    },
    zIndex: Number,
    events: Object
  },
  mounted() {
    this.$map = this.$map || this.$parent.$map;
    if (this.$map) {
      this.createPolyline();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createPolyline();
      });
    }
  },
  destroyed() {
    this.$polyline.setMap(null);
    google.maps.event.clearInstanceListeners(this.$polyline);
  },
  methods: {
    createPolyline() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          Object.assign(options, { [key]: this.$props[key] });
        }
      }
      ["draggable", "editable", "visible", "path"].forEach(k => {
        this.$watch(k, nv => {
          this.$polyline[`set${k.charAt(0).toUpperCase() + k.slice(1)}`](nv);
        });
      });
      this.$polyline = new google.maps.Polyline(options);
      this.$polyline.setMap(this.$map);
      this.registerEvents();
    },
    registerEvents() {
      const path = this.$polyline.getPath();
      path.addListener("insert_at", o => {
        this.$emit("change", path);
      });
      path.addListener("remove_at", o => {
        this.$emit("change", path);
      });
      path.addListener("set_at", o => {
        this.$emit("change", path);
      });
      const events = this.events;
      if (!events) return;
      for (let eventName in events) {
        if (eventName) this.$polyline.addListener(eventName, events[eventName]);
      }
    },
  }
};
</script>