<template>
  <div class="vue-googlemap-container">
    <div class="vue-googlemap"></div>
    <slot></slot>
  </div>
</template>

<script>
import googlemapLoader, { instance } from "../googlemapLoader.js";
export default {
  name: "vue-googlemap",
  data() {
    return {};
  },
  props: {
    backgroundColor: String, // 地图容器初始化时显示的背景色
    center: {
      type: [Array, Object],
      required: true
    },
    clickableIcons: {
      // 地图原生图标能否被点击显示poi信息
      type: Boolean,
      default: true
    },
    disableDefaultUI: {
      // 禁用原生控件
      type: Boolean,
      default: false
    },
    disableDoubleClickZoom: {
      // 禁用双击放大
      type: Boolean,
      default: false
    },
    draggable: {
      // 禁用拖拽
      type: Boolean,
      default: true
    },
    zoom: {
      type: Number,
      default: 13
    },
    maxZoom: Number,
    minZoom: Number,
    controls: {
      type: Array,
      default: () => [
        "zoom",
        "mapType",
        "scale",
        "streetView",
        "rotate",
        "fullscreen"
      ]
    },
    events: Object
  },
  mounted() {
    this.createMap();
  },
  destroyed() {
    google.maps.event.clearInstanceListeners(this.$map);
  },
  methods: {
    createMap() {
      const options = {};
      for (let key in this.$props) {
        if (this.$props[key] !== undefined) {
          if (key === "center") {
            const center = Array.isArray(this.$props[key])
              ? { lat: this.$props[key][0], lng: this.$props[key][1] }
              : this.$props[key];
            Object.assign(options, { center });
          } else if (key === "controls" && !this.$props["disableDefaultUI"]) {
            const controlsArray = [
              "zoom",
              "mapType",
              "scale",
              "streetView",
              "rotate",
              "fullscreen"
            ];
            controlsArray.forEach(c => {
              if (this.$props["controls"].indexOf(c) !== -1) {
                Object.assign(options, { [`${c}Control`]: true });
              } else {
                Object.assign(options, { [`${c}Control`]: false });
              }
            });
          } else {
            Object.assign(options, { [`${key}`]: this.$props[key] });
          }
        }
      }
      instance.load().then(() => {
        this.$map = new google.maps.Map(
          this.$el.querySelector(".vue-googlemap"),
          options
        );
        if (this.$children.length !== 0)
          this.$children.forEach(c => {
            c.$emit("mapReady", this.$map);
          });
        this.registerEvents();
        this.$watch("zoom", nv => {
          this.$map.setZoom(nv);
        });
        this.$watch("center", nv => {
          this.$map.setCenter(
            Array.isArray(nv) ? { lat: nv[0], lng: nv[1] } : nv
          );
        });
      });
    },
    registerEvents() {
      const events = this.events;
      if (!events) return;
      for (let eventName in events) {
        if (eventName) this.$map.addListener(eventName, events[eventName]);
      }
    }
  }
};
</script>

<style>
.vue-googlemap-container {
  height: 100%;
}
.vue-googlemap {
  height: 100%;
}
</style>
