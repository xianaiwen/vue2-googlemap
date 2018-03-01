import Vue from 'vue'
import Router from 'vue-router'
import begin from '../components/begin.vue'
import install from '../components/install.vue'
import map from '../components/map.vue'
import marker from '../components/marker.vue'
import window from '../components/window.vue'
import circle from '../components/circle.vue'
import rectangle from '../components/rectangle.vue'
import polyline from '../components/polyline.vue'
import polygon from '../components/polygon.vue'
import notice from '../components/notice.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: install
    }, {
      path: '/install',
      component: install
    }, {
      path: '/begin',
      component: begin
    }, {
      path: '/map',
      component: map
    }, {
      path: '/marker',
      component: marker
    }, {
      path: '/window',
      component: window
    }, {
      path: '/circle',
      component: circle
    }, {
      path: '/rectangle',
      component: rectangle
    }, {
      path: '/polyline',
      component: polyline
    }, {
      path: '/polygon',
      component: polygon
    }, {
      path: '/notice',
      component: notice
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
