<template>
  <div style='margin-left: 250px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">安装</h1>
      <h2>NPM 安装</h2>
      <div class="h" v-html="markdown('```\n npm install vue2-googlemap -S \n```')"></div>
      <h2>CDN 引入</h2>
      <div class="h" v-html="markdown('``` js\n &lt;script src=&quot;https://unpkg.com/vue2-googlemap/dist/vue2-googlemap.js&quot;&gt;&lt;/script&gt; \n```')"></div>
      <h2>Hello World</h2>
      <p>通过 CDN 的方式创建一个简单的使用例子</p>
      <div class="h" v-html="markdown('```\n' + helloWorld + '\n```')"></div>
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
      helloWorld: ''
    }
  },
  mounted () {
    this.helloWorld = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>demo | vue-googlemap</title>
        <meta charset="UTF-8">
      </head>
      <body>
        <div id="app" style='height: 400px'>
          <vue-googlemap :center='center'></vue-googlemap>
        </div>
      </body>
      <!-- 先引入 Vue -->
      <script src='https://unpkg.com/vue/dist/vue.js'><\/script>
      <!-- 引入组件库 -->
      <script src="https://unpkg.com/vue2-googlemap/dist/vue2-googlemap.js"><\/script> 
      <script>
        // 初始化
        window.vueGooglemap.default.initGooglemap({
          key: 'YOUR_KEY',
          // 默认版本为 3
          v: '3'
        });

        new Vue({
          el: '#app',
          data: function(){
            return { 
              center: [39.9, 116.39]
            }
          }
        });
      <\/script>
    </html>`
  },
  methods: {
    markdown (s) {
      return marked(s)
    }
  }
}
</script>
<style>
</style>
