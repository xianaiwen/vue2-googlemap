<template>
  <div style='margin-left: 200px;padding-left:150px;overflow: scroll' class="manger-content">
    <div style="overflow: auto">
      <h1 style="margin: 0 0 30px 0">地图组件</h1>
      <h2>示例</h2>
      <div style="height: 500px">
        <vue-googlemap :center='center'
                       :zoom='zoom'
                       :controls='controls'
                       :events='events'></vue-googlemap>
      </div>
      <div class="h" v-html="markdown('```\n' + p1 + '\n```')"></div>
      <h2>props</h2>
      <div v-html="markdown('可参考google地图文档 [map class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions) ')"></div>
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
      <div v-html="markdown('以下只列出常用事件，更多events可参考google地图文档 [map class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map) ')"></div>
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
var marked = require("marked");
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
export default {
  data() {
    return {
      p1: "",
      center: [39.9, 116.39],
      zoom: 9,
      controls: ["zoom", "streetView"],
      events: {
        click(o) {
          console.log(o);
        }
      },
      tableData: [
        {
          name: "backgroundColor",
          type: "String",
          des:
            "地图容器未加载完成google地图时显示的背景色，只在**首次**初始化生效。"
        },
        {
          name: "center",
          type: "Array，Object",
          des:
            "center参数设置地图中心，可以是数组，也可传{lat: number, lng: number}对象。**该属性是响应式的**。Required."
        },
        {
          name: "clickableIcons",
          type: "Boolean",
          des: "地图原生图标能否被点击显示poi信息。默认true"
        },
        {
          name: "disableDefaultUI",
          type: "Boolean",
          des: "是否禁用原生地图控件，默认false。优先级高于controls。"
        },
        {
          name: "disableDoubleClickZoom",
          type: "Boolean",
          des: "是否禁用鼠标双击放大操作。默认false"
        },
        {
          name: "draggable",
          type: "Boolean",
          des: "是否可拖拽。默认true"
        },
        {
          name: "zoom",
          type: "Number",
          des: "地图缩放级别，默认13，**该属性是响应式的**。"
        },
        {
          name: "maxZoom",
          type: "Number",
          des: "最大缩放级别。"
        },
        {
          name: "minZoom",
          type: "Number",
          des: "最小缩放级别。"
        },
        {
          name: "controls",
          type: "Array",
          des:
            '地图控件数组，默认值["zoom", "mapType", "scale", "streetView", "rotate", "fullscreen"]。在**disableDefaultUI**设置为true时该属性不生效。'
        },
        {
          name: "events",
          type: "Object",
          des: "需要给地图绑定的事件，key是事件名，value为事件处理函数。"
        }
      ],
      tableData1: [
        {
          name: "bounds_changed",
          type: " ",
          des: "地图视口边界发生变化时触发。"
        },
        {
          name: "center_changed",
          type: " ",
          des: "地图中心位置发生变化时触发。"
        },
        {
          name: "click",
          type:
            "[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)",
          des: "单击地图时触发。"
        },
        {
          name: "dbclick",
          type:
            "[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)",
          des: "双击地图时 触发。"
        },
        {
          name: "drag",
          type: " ",
          des: "拖动地图时触发。"
        },
        {
          name: "dragend",
          type: " ",
          des: "停止拖拽地图时触发。"
        },
        {
          name: "dragstart",
          type: " ",
          des: "开始拖拽地图时触发。"
        },
        {
          name: "mousemove",
          type:
            "[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)",
          des: "鼠标在地图上移动时触发。"
        },
        {
          name: "mouseout",
          type:
            "[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)",
          des: "鼠标移出地图容器时触发。"
        },
        {
          name: "mouseover",
          type:
            "[MouseEvent](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent)",
          des: "鼠标移入地图容器时触发。"
        },
        {
          name: "zoom_changed",
          type: " ",
          des: "地图缩放时触发。"
        }
      ]
    };
  },
  mounted() {
    this.p1 = `
    <template>
      <div style="height: 500px">
        <vue-googlemap :center='center'
                       :zoom='zoom'
                       :controls='controls'
                       :events='events'></vue-googlemap>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          center: [39.9, 116.39],
          zoom: 9,
          controls: ['zoom', 'streetView'],
          events: {
            click(o) {
              console.log(o)
            }
          }
        }
      }
    }
    <\/script>
    `;
  },
  methods: {
    markdown(s) {
      return marked(s);
    }
  }
};
</script>