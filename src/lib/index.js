import {initGooglemap} from './googlemapLoader.js';
import googlemap from './components/googlemap.vue';
import marker from './components/googlemap-marker.vue';
import polyline from './components/googlemap-polyline.vue';
import polygon from './components/googlemap-polygon.vue';
import circle from './components/googlemap-circle.vue';
import rectangle from './components/googlemap-rectangle.vue';
import infoWindow from './components/googlemap-infoWindow.vue';

const components = [
  googlemap,
  marker,
  polyline,
  polygon,
  circle,
  rectangle,
  infoWindow
];

const vueGoogleMap = {
  initGooglemap,
  components,
  installed: false,
  install(vue) {
    if (vueGoogleMap.installed) 
      return;
    components.forEach(c => {
      vue.component(c.name, c)
    })
    vueGoogleMap.installed = true;
  }
}

// vueGoogleMap.install = (vue) => {   if (vueGoogleMap.installed)     return;
// components.forEach(c => {     vue.component(c.name, c)   })
// vueGoogleMap.installed = true; }

if (typeof window !== 'undefined' && window.Vue) {
  window
    .Vue
    .use(vueGoogleMap);
}

export default vueGoogleMap;