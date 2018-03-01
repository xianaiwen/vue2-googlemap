<template>
  <div id="app">
    <div class="manger-content">
      <sideBar></sideBar>
      <!-- <transition name="el-fade-in-linear"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import sideBar from "./components/sideBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    sideBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.manger-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* text-align: center; */
  /* padding-top: 200px; */
  /* background: #f7fafc; */
  overflow: hidden;
  padding: 30px 10px 10px 10px;
}
.h {
  background: #f6f8fa;
  padding: 20px 10px;
  margin-bottom: 30px;
}
</style>
