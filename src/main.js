import Vue from 'vue'
import App from './app.vue'
import VueGooglemap from './lib'

Vue.use(VueGooglemap)

VueGooglemap.initGooglemap({
  key: 'AIzaSyCqfHjvG4-rHVTfbpfHgHZwG168utagTu4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
