<template>
  <div class="about">
    <div class="left">
      <div
        v-for="(item ,index) in feather"
        v-html="item"
        :class="['nav',{'redright': current == index}]"
        @click="current = index"
        :key="index"
      ></div>
    </div>
    <div class="right">
      <div class="header" v-if="current == 0">关于我们</div>
      <div class="header" v-if="current == 1">加入我们</div>
      <div class="header" v-if="current == 2">网站声明</div>
      <div class="content">很棒棒团</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      feather: ["关于我们", "加入我们", "网站声明"],
      current: 0
    };
  }
};
</script>
<style lang=less scoped>
.about {
  background: #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 5px;
  .left {
    width: 100px;
    font-size: 14px;
    padding-top: 8px;
    .nav {
      padding: 5px 0px 5px 10px;
      background: white;
      &:hover {
        border-left: 2px solid red;
      }
    }
    .redright {
      border-left: 2px solid red;
    }
  }
  .right {
    flex: 1;
    background: white;
    margin: 9px 10px;
    font-size: 14px;
    .header {
      padding: 5px 10px;
      border-bottom: 1px solid #ccc;
    }
    .content {
      padding-left: 10px;
    }
  }
}
</style>
