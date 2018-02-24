<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-polyline",
  data() {
    return {};
  },
  props: {
    path: Array
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
  methods: {
    createPolyline() {
      const polyline = new google.maps.Polyline({
        path: this.path
      });
      polyline.setMap(this.$map);
    }
  }
};
</script>