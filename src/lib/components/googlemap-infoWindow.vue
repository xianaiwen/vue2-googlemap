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
  methods: {
    createInfoWindow() {
      const window = new google.maps.InfoWindow({
        content: this.content,
      });
      window.open(this.$map)
    }
  }
};
</script>