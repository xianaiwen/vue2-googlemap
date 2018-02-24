<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-circle",
  data() {
    return {};
  },
  props: {
    center: [Array],
    radius: Number,
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
  methods: {
    createCircle() {
      const polyline = new google.maps.Circle({
        center: { lat: this.center[0], lng: this.center[1] },
        radius: this.radius,
        map: this.$map,
      });
    }
  }
};
</script>