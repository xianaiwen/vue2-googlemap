// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueGooglemap from 'vue2-googlemap'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueGooglemap)

VueGooglemap.initGooglemap({
  key: 'AIzaSyCqfHjvG4-rHVTfbpfHgHZwG168utagTu4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
