<template>
  <div style='margin-left: 200px;padding-left:150px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">注意事项</h1>
      <div class="h" v-html="markdown('```\n' + p1 + '\n```')"></div>
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
    data() {
      return {
        p1: ''
      }
    },
    mounted() {
      this.p1 = `
      所有地图元素实例已挂载在相关组件上，如需对实例操作可自行获取。比如获取地图的marker实例：
        this.$refs.marker.$maker
      
      应当注意的是，目前无法保证在父组件的mounted生命周期内获取到，后续会考虑优化。
      `
    },
    methods: {
      markdown (s) {
        return marked(s)
      }
    }
  }
</script>