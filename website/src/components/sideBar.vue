<template>
  <div style="width: 200px">
    <h3>文档</h3>
    <el-menu router :default-active='r'>
      <el-submenu index='1'>
        <template slot="title">
          <h4>使用基础</h4>
        </template>
        <el-menu-item index="/install">安装</el-menu-item>
        <el-menu-item index="/begin">快速上手</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title">
          <h4>组件</h4>
        </template>
        <el-menu-item index="/map">地图</el-menu-item>
        <el-menu-item index="/marker">标记</el-menu-item>
        <el-menu-item index="/window">窗体</el-menu-item>
      </el-submenu>
      <el-submenu index='3'>
        <template slot="title">
          <h4>形状</h4>
        </template>
        <el-menu-item index="/circle">圆形</el-menu-item>
        <el-menu-item index="/rectangle">矩形</el-menu-item>
        <el-menu-item index="/polyline">多段线</el-menu-item>
        <el-menu-item index="/polygon">多边形</el-menu-item>
      </el-submenu>
      <el-menu-item index='/notice'>
          <span slot="title">注意事项</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      r: '/install',
    }
  },
  mounted () {
    this.r = this.$route.path
  }
}
</script>

<style>
</style>
