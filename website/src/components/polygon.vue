<template>
  <div style='margin-left: 200px;padding-left:150px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">多边形组件</h1>
      <h2>示例</h2>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-polygon :paths='paths'
                                 editable
                                 :events='events'
                                 @change='getChange'></vue-googlemap-polygon>
        </vue-googlemap>
      </div>
      <div class="h" v-html="markdown('```\n' + p1 + '\n```')"></div>
      <h2>props</h2>
      <div v-html="markdown('可参考google地图文档 [polygon class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#PolygonOptions) ')"></div>
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
      <div v-html="markdown('以下只列出常用事件，更多events可参考google地图文档 [polygon class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon) ')"></div>
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
      paths: [
        [{lat: 39.9, lng: 116.39},
        {lat: 39.9, lng: 116.42},
        {lat: 39.93, lng: 116.44},]
      ],
      events: {
        click(o) {
          console.log(o)
        }
      },
      tableData: [
        {
          name: 'paths',
          type: 'Array',
          des: '多边形的顶点坐标。**该属性是响应式的**。Required.'
        },
        {
          name: 'clickable',
          type: 'Boolean',
          des: '是否可以被点击。默认true'
        },
        {
          name: 'draggable',
          type: 'Boolean',
          des: '是否可拖拽。**该属性是响应式的**。默认false'
        },
        {
          name: 'editable',
          type: 'Boolean',
          des: '是否可编辑。**该属性是响应式的**。默认false'          
        },
        {
          name: 'fillColor',
          type: 'String',
          des: '图形的填充颜色。'
        },
        {
          name: 'fillOpacity',
          type: 'Number',
          des: '填充颜色透明度。'
        },
        {
          name: 'strokeColor',
          type: 'String',
          des: '多边形的边界线颜色。'
        },
        {
          name: 'strokeOpacity',
          type: 'Number',
          des: '多边形的边界线颜色透明度。'
        },
        {
          name: 'strokeWeight',
          type: 'Number',
          des: '多边形的边界线宽度度。'
        },
        {
          name: 'visible',
          type: 'Boolean',
          des: '是否可见。默认true。**该属性是响应式的**。'
        },
        {
          name: 'zIndex',
          type: 'Number',
          des: '层叠优先级，zIndex越大，则显示在上层。'
        },
        {
          name: 'events',
          type: 'Object',
          des: '需要给图形绑定的事件，key是事件名，value为事件处理函数。'
        }
      ],
      tableData1: [
        {
          name: 'change',
          type: '',
          des: '在多边形图案发生变化时触发，返回对象[MVCArray class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MVCArray)。'
        },
        {
          name: 'click',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '单击图形时触发。'
        },
        {
          name: 'dbclick',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '双击图形时触发。'
        },
        {
          name: 'drag',
          type: ' ',
          des: '拖动图形时触发。'
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
          des: '鼠标在图形上按下时触发。'
        },
        {
          name: 'mouseout',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标移出图形时触发。'
        },
        {
          name: 'mousemove',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标在图形上滑动时触发。'
        },
        {
          name: 'mouseover',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标移入图形时触发。'
        },
        {
          name: 'mouseup',
          type: '[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)',
          des: '鼠标在图形上弹起时触发。'
        }
      ]
    }
  },
  mounted() {
    this.p1 = `
    <template>
      <div style="height: 500px">
        <vue-googlemap :center='center'>
          <vue-googlemap-polygon :paths='paths'
                                 editable
                                 :events='events'
                                 @change='getChange'></vue-googlemap-polygon>
        </vue-googlemap>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          center: [39.9, 116.39],
          paths: [
              [{lat： 39.9, lng： 116.39},
            {lat： 39.9, lng： 116.42},
            {lat： 39.93, lng： 116.44},]
          ],
          events: {
            click(o) {
              console.log(o)
            }
          }
        }
      },
      methods: {
        getChange(o) {
          console.log(o)
        }
      }
    }
    <\/script>
    `
  },
  methods: {
    markdown (s) {
      return marked(s)
    },
    getChange(o) {
      console.log(o)
    }
  }
}
</script>