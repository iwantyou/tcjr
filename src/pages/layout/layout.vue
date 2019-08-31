<template>
  <div id="app">
    <fixhearder></fixhearder>
    <!-- 头部 -->
    <holder></holder>
    <!-- body -->
    <router-view class="layout" />
    <!--尾部  -->
    <foot></foot>
  </div>
</template>
<script>
import holder from "@/components/header/header";
import foot from "@/components/footer/footer";
import fixhearder from "@/components/fixheader/index";
export default {
  name: "layout",
  components: {
    holder,
    foot,
    fixhearder
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
#app {
  min-width: 1256px;
  height: 100%;
  overflow: auto;
  background-color: #f8fafc;
}
.layout {
  min-height: calc(100% - 350px);
}
</style>
