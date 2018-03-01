<template>
  <div style='margin-left: 200px;padding-left:150px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">窗体组件</h1>
      <h2>示例</h2>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-marker :position='center' ref="marker"></vue-googlemap-marker>
          <vue-googlemap-infoWindow :position='center'
                                    :content='content'
                                    :events="events"
                                    @change='change'
                                    ref='window'></vue-googlemap-infoWindow>
        </vue-googlemap>
      </div>
      <el-button type="primary" round @click='show'>显示窗口</el-button>
      <el-button type="primary" round @click='close'>关闭窗口</el-button>
      <div class="h" v-html="markdown('```\n' + p1 + '\n```')"></div>
      <div class="h" style="margin: 20px 0" v-html="markdown('```\n' + p2 + '\n```')"></div>
      <h2>props</h2>
      <div v-html="markdown('可参考google地图文档 [infoWindow class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindowOptions) ')"></div>
      <el-table
        :data="tableData"
        border
        style="width: 100%;margin-bottom: 50px">
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="180">
        </el-table-column>
        <el-table-column
          label="说明">
            <template slot-scope="scope">
            <span v-html="markdown(scope.row.des)"></span>
          </template>
        </el-table-column>
      </el-table>
      <h2>事件</h2>
      <div v-html="markdown('以下只列出常用事件，更多events可参考google地图文档 [infoWindow class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#iInfoWindow) ')"></div>
      <el-table
        :data="tableData1"
        border
        style="width: 100%;margin-bottom: 50px">
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          label="参数"
          width="180">
          <template slot-scope="scope1">
            <span v-html="markdown(scope1.row.type)"></span>
          </template>
        </el-table-column>
        <el-table-column
          label="说明">
          <template slot-scope="scope1">
            <span v-html="markdown(scope1.row.des)"></span>
          </template>
        </el-table-column>
      </el-table>
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
      center: [39.9, 116.39],
      content: 'This is a infoWindow.',
      events: {
        closeclick() {
          console.log('click!')
        }
      },
      tableData: [
        {
          name: 'position',
          type: 'Array，Object',
          des: '设置infoWindow坐标，可以是数组，也可传{lat: number, lng: number}对象。**该属性是响应式的**。Required.'
        },
        {
          name: 'disableAutoPan',
          type: 'Boolean',
          des: '是否自动调整以使窗口完全显示在视口中。默认true'
        },
        {
          name: 'maxWidth',
          type: 'Number',
          des: '设置窗口的最大宽度。'
        },
        {
          name: 'pixelOffset',
          type: 'Array',
          des: '锚点相对于坐标点的偏移量[x, y]。 '          
        },
        {
          name: 'content',
          type: 'String',
          des: 'infoWindow显示的内容，可以是html代码。**该属性是响应式的**。'
        },
        {
          name: 'zIndex',
          type: 'Number',
          des: '层叠优先级，zIndex越大，则显示在上层。**该属性是响应式的**。'
        },
        {
          name: 'events',
          type: 'Object',
          des: '需要绑定的事件，key是事件名，value为事件处理函数。'
        }
      ],
      tableData1: [
        {
          name: 'change',
          type: '',
          des: '当content，position，zIndex发生变化是触发。返回对象 {content: String, position: [latlng](https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLng), zIndex: Number }'
        },
        {
          name: 'closeclick',
          type: '',
          des: '窗口关闭按钮被点击时触发。'
        }
      ]
    }
  },
  mounted() {
    this.p1 = `
    <template>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-marker :position='center' :ref="marker"></vue-googlemap-marker>
          <vue-googlemap-infoWindow :position='center'
                                draggable
                                ref='window'
                                events='events'></vue-googlemap-infoWindow>
        </vue-googlemap>
        <el-button type="primary" round @click='show'>显示窗口</el-button>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          center: [39.9, 116.39],
          events: {
            closeclick() {
              console.log('click!')
            }
          }
        }
      },
      methods: {
        show() {
          this.$refs.window.open(this.$refs.marker.$marker)
        },
        close() {
          this.$refs.window.close()
        }
      }
    }
    <\/script>
    `
    this.p2 = `
    google地图要求显式的调用open方法来显示信息窗体，可以通过this.$refs.infoWindow.open()来显示窗体。
    `
  },
  methods: {
    markdown (s) {
      return marked(s)
    },
    show() {
      this.content = 'aaa'
      this.$refs.window.open(this.$refs.marker.$marker)
    },
    close() {
      this.$refs.window.close()
    },
    change(o) {
      console.log(o)
    }
  }
}
</script>