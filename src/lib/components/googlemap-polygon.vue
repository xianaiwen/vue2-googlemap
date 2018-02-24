<template>
  
</template>

<script>
export default {
  name: "vue-googlemap-polygon",
  data() {
    return {};
  },
  props: {
    paths: Array
  },
  mounted() {
    this.$map = this.$map || this.$parent.$map;
    if (this.$map) {
      this.createPolygon();
    } else {
      this.$on("mapReady", map => {
        this.$map = map;
        this.createPolygon();
      });
    }
  },
  methods: {
    createPolygon() {
      const polylgon = new google.maps.Polygon({
        paths: this.paths
      });
      polylgon.setMap(this.$map);
    }
  }
};
</script>