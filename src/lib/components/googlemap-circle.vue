<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-circle",
  data() {
    return {};
  },
  props: {
    center: {
      type: [Array, Object],
      required: true
    },
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
    fillColor: String,
    fillOpacity: Number,
    radius: Number,
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
      this.createCircle();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createCircle();
      });
    }
  },
  destroyed() {
    this.$circle.setMap(null);
    google.maps.event.clearInstanceListeners(this.$circle);
  },
  methods: {
    createCircle() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          if (key === "center") {
            const center = Array.isArray(this.$props.center)
              ? { lat: this.$props.center[0], lng: this.$props.center[1] }
              : this.$props.center;
            Object.assign(options, { center });
          } else {
            Object.assign(options, { [key]: this.$props[key] });
          }
        }
      }
      this.$circle = new google.maps.Circle(options);
      this.$circle.setMap(this.$map);
      this.$watch("center", nv => {
        this.$circle.setCenter(
          Array.isArray(nv) ? { lat: nv[0], lng: nv[1] } : nv
        );
      });
      ["draggable", "editable", "visible"].forEach(k => {
        this.$watch(k, nv => {
          this.$circle[`set${k.charAt(0).toUpperCase() + k.slice(1)}`](nv);
        });
      });
      this.registerEvents();
    },
    registerEvents() {
      this.$circle.addListener("center_changed", o => {
        this.$emit("change", {
          center: this.$circle.getCenter(),
          radius: this.$circle.getRadius()
        });
      });
      this.$circle.addListener("radius_changed", o => {
        this.$emit("change", {
          center: this.$circle.getCenter(),
          radius: this.$circle.getRadius()
        });
      });
      const events = this.events;
      if (!events) return;
      for (let eventName in events) {
        if (eventName) this.$circle.addListener(eventName, events[eventName]);
      }
    }
  }
};
</script>