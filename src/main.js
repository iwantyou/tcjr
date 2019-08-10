// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/index.js'
import './assets/css/base.css'
import './assets/css/element.defa.css'
// 添加iconfont字体
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

import { Message } from "element-ui";
// 由于element-ui没有提供install方法
Vue.use(Message);
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
