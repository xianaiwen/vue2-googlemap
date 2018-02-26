# vue2-googlemap

> 基于 Vue 2.x 和google地图的地图组件

## Install

``` bash
npm install -S vue2-googlemap
```

## Usage

``` javascript
import Vue from 'vue';
import vueGooglemap from 'vue2-googlemap';

Vue.use(vueGooglemap);

/*
  The api key is required.
  If you want to ignore the browser's language setting, you can set the language parameter.
  Suggest to use the release version. v=3 by default.
*/
vueGooglemap.initGooglemap({
  key: 'your GOOGLE_MAPS_API_KEY',
  language: 'zh-CN',
  v: '3',
})
```

## Components

### Map
``` javascript
<vue-googlemap :center="center" :zoom="zoom" :controls="controls" :events="events" ></vue-googlemap>
```
### Marker
``` javascript
<vue-googlemap-marker :position="position" :icon="icon" :events="events" ></vue-googlemap-marker>
```
### infoWindow
``` javascript
<vue-googlemap-infoWindow :position="position" :events="events" @change="change" ></vue-googlemap-infoWindow>
```
### Circle
``` javascript
<vue-googlemap-circle :center="center" :radius="radius" :events="events" @change="change" editable ></vue-googlemap-circle>
```
### Rectangle
``` javascript
<vue-googlemap-rectangle :bounds="bounds" :events="events" @change="change" editable ></vue-googlemap-rectangle>
```
### Polyline
``` javascript
<vue-googlemap-polyline :path="path" :events="events" @change="change" editable ></vue-googlemap-polyline>
```
### Polygon
``` javascript
<vue-googlemap-polygon :paths="paths" :events="events" @change="change" editable ></vue-googlemap-polygon>
```
## License

This project is covered under the MIT License. Feel free to use it wherever you like.
