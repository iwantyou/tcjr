<template>
  <div class="fix" v-show="scrolltop">
    <div class="flex">
      <div class="left">
        <!-- <el-menu
          background-color="#fff"
          text-color="#000"
          ac
          menu-trigger="hover"
          mode="horizontal"
        >
          <el-submenu index="1">
            <template slot="title">岗位选择</template>
            <el-menu-item v-for="(item, index) in Data" :key="index">{{item}}</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">地区</template>
            <el-menu-item v-for="(item, index) in Data" :key="index">{{item}}</el-menu-item>
          </el-submenu>
        </el-menu>-->
        <ul class="flex">
          <li
            class="menu-item"
            :class="[{'box-s': cur}]"
            @mouseover="cur = true"
            @mouseleave="cur = false"
          >
            <div class="menu-title" style=" margin: 6px 40px 6px 12px;
        font-size: 16px;">
              岗位选择
              <i class="el-icon-arrow-up" style="margin-left:5px;font-size:12px" v-if="cur"></i>
              <i class="el-icon-arrow-down" style="margin-left:5px;font-size:12px" v-else></i>
            </div>
            <ul class="menu-title-item">
              <li v-for="(item, index) in Data" :key="index">{{item}}</li>
            </ul>
          </li>
          <li
            class="menu-item"
            :class="[{'box-s': cur1}]"
            @mouseover="cur1 = true"
            @mouseleave="cur1=false"
          >
            <div class="menu-title" style=" margin: 6px 40px 6px 12px;
        font-size: 16px;">
              地区
              <i class="el-icon-arrow-up" style="margin-left:5px;font-size:12px;" v-if="cur1"></i>
              <i class="el-icon-arrow-down" style="margin-left:5px;font-size:12px;" v-else></i>
            </div>
            <ul class="menu-title-item">
              <li v-for="(item, index) in Data" :key="index">{{item}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <el-input type="text" placeholder="请输入搜索职位">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fixheader",
  data() {
    return {
      Data: [1, 2, 2, 2, 2],
      cur: false,
      cur1: false,
      scrolltop: false
    };
  },
  mounted() {
    this.mou();
  },
  methods: {
    mou() {
      this.scrolltop = document.querySelector("#app").scrollTop ? "true" : "";
      document.body.addEventListener(
        "wheel",
        () => {
          this.scrolltop = document.querySelector("#app").scrollTop
            ? "true"
            : "";
        },
        false
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 80px;
  z-index: 100;
  min-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  .left {
    margin-left: 50px;
    position: absolute;
    left: 10%;
    right: 0;
    top: 20px;
    .menu-item {
      position: relative;
      box-sizing: content-box;
      width: 150px;
      .menu-title-item {
        box-sizing: content-box;
        position: relative;
        display: none;
        max-height: 200px;
        max-width: 150px;
        overflow-y: auto;
        li {
          overflow: hidden;
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 12px;
          background: #fff;
          font-size: 14px;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          &:hover {
            background-color: #5183ff;
            color: #fff;
          }
        }
      }
      &:hover .menu-title-item {
        display: block;
      }
    }
    .box-s {
      box-shadow: 0 0 10px 0 rgba(81, 131, 255, 0.55);
      border: 1px solid #5183ff;
    }
  }
  .right {
    position: absolute;
    right: 150px;
    top: 20px;
    width: 600px;
  }
}
</style>