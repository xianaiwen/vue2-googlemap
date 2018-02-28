<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-rectangle",
  data() {
    return {};
  },
  props: {
    bounds: Array,
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
    fillOpacity: {
      type: Number,
      default: 1.0
    },
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
      this.createRectangle();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createRectangle();
      });
    }
  },
  destroyed() {
    this.$rectangle.setMap(null);
    google.maps.event.clearInstanceListeners(this.$rectangle);
  },
  methods: {
    createRectangle() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          if (key === "bounds") {
            let arr = this.$props[key].slice(0, 4);
            const bounds = {
              north: arr[0],
              south: arr[1],
              east: arr[2],
              west: arr[3]
            };
            Object.assign(options, { [key]: bounds });
          } else {
            Object.assign(options, { [key]: this.$props[key] });
          }
        }
      }
      this.$watch("bounds", nv => {
        let arr = this.$props[key].slice(0, 4);
        const bounds = {
          north: arr[0],
          south: arr[1],
          east: arr[2],
          west: arr[3]
        };
        this.$rectangle.setBounds(bounds);
      });
      ["draggable", "editable", "visible"].forEach(k => {
        this.$watch(k, nv => {
          this.$rectangle[`set${k.charAt(0).toUpperCase() + k.slice(1)}`](nv);
        });
      });
      this.$rectangle = new google.maps.Rectangle(options);
      this.$rectangle.setMap(this.$map);
      this.registerEvents();
    },
    registerEvents() {
      this.$rectangle.addListener("bounds_changed", o => {
        this.$emit("change", this.$rectangle.getBounds());
      });
      const events = this.events;
      if (!events) return;
      for (let eventName in events) {
        if (eventName)
          this.$rectangle.addListener(eventName, events[eventName]);
      }
    }
  }
};
</script>