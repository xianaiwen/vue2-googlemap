

import Vue from 'vue'
import App from './app.vue'
import vueGooglemap from './lib/index.js'

Vue.use(vueGooglemap)
vueGooglemap.initGooglemap({
  key: 'AIzaSyCqfHjvG4-rHVTfbpfHgHZwG168utagTu4',
})

new Vue({
  el: '#app',
  render: h => h(App)
})
