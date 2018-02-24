<template>
  <div style="height: 500px">
    <vue-googlemap :center="center" :zoom='zoom' backgroundColor='#ff0' disableDefaultUI :clickableIcons= 'false' :events='events'>
      <vue-googlemap-marker :title='t' :position='position' draggable :events='events'></vue-googlemap-marker>
      <vue-googlemap-polyline :path='path'></vue-googlemap-polyline>
      <vue-googlemap-polygon :paths='paths'></vue-googlemap-polygon>
      <vue-googlemap-circle :center='center' :radius='1000'></vue-googlemap-circle>
    </vue-googlemap>
    <button @click="change"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: [39.9, 116.39],
      controls: [],
      zoom: 13,
      t: 'aaa',
      events: {
        click: e => {
          console.log(e);
        },
        dragend: e => {
          console.log(e)
        }
      },
      position: [39.9, 116.39],
      path: [
        { lat: 39.9, lng: 116.39 },
        { lat: 39.91, lng: 116.49 },
        { lat: 39.92, lng: 116.59 },
        { lat: 39.93, lng: 116.69 }
      ],
      paths: [
        { lat: 39.9, lng: 116.39 },
        { lat: 39.91, lng: 116.39 },
        { lat: 39.9, lng: 116.49 },
        { lat: 39.91, lng: 116.49 }
      ]
    };
  },
  methods: {
    change() {
      this.zoom += 1;
      // this.position = [39.91, 116.49];
      this.t = 'bbb'
    }
  }
};
</script>