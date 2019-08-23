<template>
  <div class="about">
    <div class="left">
      <el-tabs :value="tab" tab-position="left">
        <el-tab-pane label="关于我们" :name="1">关于我们</el-tab-pane>
        <el-tab-pane label="加入我们" :name="2">加入我们</el-tab-pane>
        <el-tab-pane label="网站声明" :name="3">网声明</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "about1",
  data() {
    return {
      tab: 1
    };
  }
};
</script>
<style lang="less" scoped>
// .left {
//   // background-color: rgba(0, 0, 0, 0.7);
// }
</style>