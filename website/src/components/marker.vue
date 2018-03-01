<template>
  <div style='margin-left: 200px;padding-left:150px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">标记点组件</h1>
      <h2>示例</h2>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-marker :position='center'
                                draggable
                                :events='events'></vue-googlemap-marker>
        </vue-googlemap>
      </div>
      <div class="h" v-html="markdown('```\n' + p1 + '\n```')"></div>
      <h2>props</h2>
      <div v-html="markdown('可参考google地图文档 [marker class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MarkerOptions) ')"></div>
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
      <div v-html="markdown('以下只列出常用事件，更多events可参考google地图文档 [marker class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker) ')"></div>
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
      events: {
        click(o) {
          console.log(o)
        }
      },
      tableData: [
        {
          name: 'position',
          type: 'Array，Object',
          des: '设置marker坐标，可以是数组，也可传{lat: number, lng: number}对象。**该属性是响应式的**。Required.'
        },
        {
          name: 'clickable',
          type: 'Boolean',
          des: '是否可以被点击。**该属性是响应式的**。默认true'
        },
        {
          name: 'draggable',
          type: 'Boolean',
          des: '是否可拖拽。**该属性是响应式的**。默认false'
        },
        {
          name: 'icon',
          type: 'String, Object',
          des: '点坐标的显示图标，可以传入图片地址或者google [Icon class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Icon)。**该属性是响应式的**。'          
        },
        {
          name: 'label',
          type: 'String',
          des: 'marker显示的文字说明。**该属性是响应式的**。'
        },
        {
          name: 'title',
          type: 'String',
          des: '鼠标移入marker后显示的说明。**该属性是响应式的**。'
        },
        {
          name: 'opacity',
          type: 'Number',
          des: 'marker点的透明度。默认1.0。**该属性是响应式的**。'
        },
        {
          name: 'visible',
          type: 'Boolean',
          des: '是否可见。默认true。**该属性是响应式的**。'
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
          name: 'position_changed',
          type: '',
          des: 'marker位置发生变化时触发。'
        },
        {
          name: 'click',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '单击marker时触发。'
        },
        {
          name: 'dbclick',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '双击地图时触发。'
        },
        {
          name: 'drag',
          type: ' ',
          des: '拖动marker时触发。'
        },
        {
          name: 'dragend',
          type: ' ',
          des: '停止拖拽时触发。'
        },
        {
          name: 'dragstart',
          type: ' ',
          des: '开始拖拽时触发。'
        },
        {
          name: 'mousedown',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标在marker上按下时触发。'
        },
        {
          name: 'mouseout',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标移出marker时触发。'
        },
        {
          name: 'mouseover',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标移入marker时触发。'
        },
        {
          name: 'mouseup',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标在marker上弹起时触发。'
        }
      ]
    }
  },
  mounted() {
    this.p1 = `
    <template>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-marker :position='center'
                                draggable
                                events='events'></vue-googlemap-marker>
        </vue-googlemap>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          center: [39.9, 116.39],
          events: {
            click(o) {
              console.log(o)
            }
          }
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