<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-marker",
  data() {
    return {};
  },
  props: {
    position: {
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
    icon: [String, Object],
    label: String,
    title: String,
    opacity: {
      type: Number,
      default: 1.0
    },
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
      this.createMarker();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createMarker();
      });
    }
  },
  destroyed() {
    this.$marker.setMap(null);
    google.maps.event.clearInstanceListeners(this.$marker);
  },
  methods: {
    createMarker() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          if (key === "position") {
            const position = Array.isArray(this.$props.position)
              ? { lat: this.$props.position[0], lng: this.$props.position[1] }
              : this.$props.position;
            Object.assign(options, { position });
          } else {
            Object.assign(options, { [key]: this.$props[key] });
          }
        }
      }
      this.$marker = new google.maps.Marker(options);
      this.$marker.setMap(this.$map);
      this.$watch("position", nv => {
        this.$marker.setPosition(
          Array.isArray(nv) ? { lat: nv[0], lng: nv[1] } : nv
        );
      });
      [
        "clickable",
        "draggable",
        "icon",
        "label",
        "title",
        "opacity",
        "visible",
        "zIndex"
      ].forEach(k => {
        this.$watch(k, nv => {
          this.$marker[`set${k.charAt(0).toUpperCase() + k.slice(1)}`](nv);
        });
      });
      this.registerEvents();
    },
    registerEvents() {
      const events = this.events;
      if (!events) return;
      for (let eventName in events) {
        if (eventName) this.$marker.addListener(eventName, events[eventName]);
      }
    }
  }
};
</script>