<template>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-marker ref='marker' :position='center'></vue-googlemap-marker>
          <vue-googlemap-infoWindow :position='center'
                                    :content='content'
                                    :events="events"
                                    ref='window'></vue-googlemap-infoWindow>
        </vue-googlemap>     
        <button @click='open'></button>                       
      </div>
</template>
<script>
  export default {
    data() {
      return {
        center: [39.9, 116.39],
        content: 'This is a infoWindow.',
        events: {
          closeclick() {
            console.log('click!')
          }
        }
      }
    },
    methods: {
      open(o) {
        this.$refs.window.open(this.$refs.marker.$marker)
      }
    }
  }
</script>