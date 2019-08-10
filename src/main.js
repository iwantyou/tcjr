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
import {Button, Input} from 'element-ui'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)

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
