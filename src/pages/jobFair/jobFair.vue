<template>
  <div class="jobfire">
    <!-- <el-select v-model="msg1" size="medium">
      <i slot="prefix" class="el-icon-search"></i>
      <el-option v-for="item in msg" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>-->
    <!-- <div class="loading">
      <div class="cen">加载中...</div>
    </div>-->
    <div class="shiyan">
      <shiyan :title="title" #user="{user}">
        <span>{{user.name}}</span>
      </shiyan>
    </div>
    <div :class="['main',{'collapse':collapse}]">
      <div class="logo">
        <transition-group name="fade">
          <img v-if="collapse" :key="0" width="30px" height="30px" />
        </transition-group>
        <transition-group name="fade">
          <h3 v-if="!collapse" :key="1">实验</h3>
        </transition-group>
      </div>
      <div class="menu">
        <el-menu
          mode="vertical"
          background-color="#349A68 "
          text-color="white"
          active-text-color="#48D1CC"
          :default-active="index"
          @select="selecindex"
          :collapse="collapse"
          before-leave="selectname"
        >
          <a href="javascript:;">
            <el-menu-item index="1">
              <i :class="['el-icon-loading',{'yanse':index !== 1}]"></i>
              <span slot="title">第一</span>
            </el-menu-item>
          </a>
          <el-submenu index="2" popper-class="pop">
            <template slot="title">
              <i :class="['el-icon-loading',{'yanse':index !== 1}]"></i>
              <span slot="title">第二</span>
            </template>
            <a href="javascript:;">
              <el-menu-item index="2-1">1</el-menu-item>
            </a>
            <el-menu-item index="2-2">2</el-menu-item>
            <el-menu-item index="2-3">3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i :class="['el-icon-loading',{'yanse':index !== 1}]"></i>
            <template slot="title">第三</template>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div :class="['app-main',{'hidden-collapse':collapse}]">
      <div class="tu">
        <span @click="elcoll">
          <i class="el-icon-s-unfold"></i>
        </span>
      </div>
      <div class="tab">
        <el-tabs v-model="name" type="border-card">
          <el-tab-pane label="基本信息" name="one">
            <div class="common">基本信息</div>
          </el-tab-pane>
          <el-tab-pane label="第二" name="two">
            <div class="common">第二</div>
          </el-tab-pane>
          <el-tab-pane label="第三" name="three">
            <div class="common">第三</div>
          </el-tab-pane>
          <el-tab-pane name="four">
            <template slot="label">
              <i class="el-icon-date"></i>
              第四
            </template>
            <div class="common">第四</div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="bream">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>
<script>
import shiyan from "@/components/slot";
export default {
  name: "jobFair",
  components: {
    shiyan
  },
  data() {
    return {
      msg1: 1,
      msg: [
        {
          label: "上海",
          value: 1
        },
        {
          label: 2,
          value: 2
        },
        {
          label: 3,
          value: 3
        },
        {
          label: 4,
          value: 4
        }
      ],
      index: "1",
      collapse: false,
      name: "one",
      title: {
        name: 1
      }
    };
  },
  mounted() {
    this.loading();
  },
  methods: {
    loading() {
      var loading1 = this.$loading({
        target: ".loading",
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "vv"
      });
      setTimeout(() => {
        loading1.close();
      }, 5);
    },
    selecindex(index) {
      console.log(index);
    },
    elcoll() {
      this.collapse = !this.collapse;
      this.title = {
        name: "1234567"
      };
    },
    selectname(name, oldname) {
      this.name = name;
    }
  }
};
</script>
<style>
.vv .el-loading-spinner i,
.vv .el-loading-spinner p {
  color: #fff;
}
.el-menu .el-menu-item.is-active {
  background-color: #fff !important;
}
.el-submenu__title i {
  color: #fff;
}
.main .el-menu--collapse .el-tooltip,
.main .el-menu--collapse .el-submenu__title {
  padding: 0 10px !important;
}
.main .el-menu--collapse {
  width: 46px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #349a68;
}
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #349a68;
}
.el-tabs--border-card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
</style>
<style lang="scss" scoped>
.shiyan {
  clear: both;
  text-align: center;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
.loading {
  padding-top: 40px;
}
.jobfire {
  width: 100%;
}
.cen {
  text-align: center;
  min-height: 400px;
}
.menu {
  width: 100%;
  .el-menu {
    height: 59vh;
    width: 100%;
  }
  &::before {
    content: "";
    display: table;
    clear: both;
  }
}
.yanse {
  color: #fff;
}
.main {
  position: fixed;
  left: 0;
  top: 50px;
  overflow: hidden;
  width: 210px;
  transition: width 0.28s;
}
.main.collapse {
  width: 46px;
}
.logo.collapse {
  width: 46px;
}
.logo {
  float: left;
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: #349a68;
  img {
    border-radius: 50%;
  }
  h3 {
    color: #fff;
    letter-spacing: 0.2em;
  }
}
.app-main {
  margin-left: 210px;
  transition: margin-left 0.28s;
  height: calc(59vh + 50px);
  background-color: #eee;
  overflow: hidden;
  .tu {
    float: left;
    box-sizing: border-box;
    line-height: 50px;
    padding: 0 15px;
    i {
      font-size: 25px;
    }
  }
  .tab {
    clear: both;
    box-sizing: border-box;
    padding: 15px 30px;
    .el-tabs {
      min-height: 300px;
      .common {
        padding: 20px 15px;
      }
    }
  }
}
.jobfire .hidden-collapse {
  margin-left: 46px;
}
</style>
