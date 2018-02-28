<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-infoWindow",
  data() {
    return {};
  },
  props: {
    content: String,
    disableAutoPan: {
      type: Boolean,
      default: true,
    },
    maxWidth: Number,
    pixelOffset: Array,
    position: [Array, Object],
    zIndex: Number,
    events: Object
  },
  mounted() {
    this.$map = this.$map || this.$parent.$map;
    if (this.$map) {
      this.createInfoWindow();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createInfoWindow();
      });
    }
  },
  destroyed() {
    this.$window.close();
    google.maps.event.clearInstanceListeners(this.$window);
  },
  methods: {
    createInfoWindow() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          if (key === "pixelOffset") {
            Object.assign(options, {
              [key]: new google.maps.Size(
                this.$props[key][0],
                this.$props[key][1]
              )
            });
          } else if (key === "position") {
            const position = Array.isArray(this.$props.position)
              ? { lat: this.$props.position[0], lng: this.$props.position[1] }
              : this.$props.position;
            Object.assign(options, { position });
          } else {
            Object.assign(options, { [key]: this.$props[key] });
          }
        }
      }
      this.$watch("position", nv => {
        this.$window.setPosition(
          Array.isArray(nv) ? { lat: nv[0], lng: nv[1] } : nv
        );
      });
      ["content", "zIndex"].forEach(k => {
        this.$watch(k, nv => {
          this.$window[`set${k.charAt(0).toUpperCase() + k.slice(1)}`](nv);
        });
      });
      this.$window = new google.maps.InfoWindow(options);
      this.registerEvents();
    },
    registerEvents() {
      this.$window.addListener("content_changed", o => {
        this.$emit("change", {
          content: this.$window.getContent(),
          position: this.$window.getPosition(),
          zindx: this.$window.getZIndex()
        });
      });
      this.$window.addListener("position_changed", o => {
        this.$emit("change", {
          content: this.$window.getContent(),
          position: this.$window.getPosition(),
          zindx: this.$window.getZIndex()
        });
      });
      this.$window.addListener("zindex_changed", o => {
        this.$emit("change", {
          content: this.$window.getContent(),
          position: this.$window.getPosition(),
          zindx: this.$window.getZIndex()
        });
      });
      const events = this.events;
      if (!events) return;
      for (let eventName in events) {
        if (eventName) this.$window.addListener(eventName, events[eventName]);
      }
    },
    open(o) {
      o ? this.$window.open(this.$map, o) : this.$window.open(this.$map);
    },
    close() {
      this.$window.close()
    }
  }
};
</script>