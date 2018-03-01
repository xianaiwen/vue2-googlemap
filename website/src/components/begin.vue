<template>
  <div style='margin-left: 250px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">快速上手</h1>
      <p>通过vue-cli创建webpack项目工程，当然你也可以按自己需求创建webpack项目</p>
      <div class="h" v-html="markdown('```\n' + p1 + '\n```')"></div>
      <p>main.js</p>
      <div class="h" v-html="markdown('```\n' + p2 + '\n```')"></div>
      <p>app.vue</p>
      <div class="h" v-html="markdown('```\n' + p3 + '\n```')"></div>
    </div>
  </div>
</template>
<script>
var marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
export default {
  data () {
    return {
      p1: '',
      p2: '',
      p3: '',
    }
  },
  mounted() {
    this.p1 = `
      vue init webpack demo
      npm install
      npm install vue2-googlemap
    `
    this.p2 = `
    import Vue from 'vue';
    import vueGooglemap from 'vue2-googlemap';

    Vue.use(vueGooglemap);

    vueGooglemap.initGooglemap({
      key: 'your GOOGLE_MAPS_API_KEY',
      language: 'zh-CN',
      v: '3',
    })

    new Vue({
      el: '#app',
      render: h => h(App)
    })
    `
    this.p3 = `
    <template>
      <div id="app">
        <div style="height: 500px">
          <vue-googlemap :center='center'></vue-googlemap>
        </div>
      </div>
    </template>

    <script>
    export default {
      data () {
        return {
          center: [39.9, 116.39]
        }
      }
    }
    <\/script>
    `
  },
  methods: {
    markdown (s) {
      return marked(s)
    }
  }
}
</script>