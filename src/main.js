// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/index.js'
import './assets/css/base.css'
import './assets/css/element.defa.css'
import './assets/css/flex.css'
// import './assets/css/mixin.scss'
// 添加iconfont字体
import './assets/iconfont/iconfont.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css'
moment.locale('zh-cn');
Vue.config.productionTip = false
Vue.filter('dateformat', (value) => {
  return moment(value).format('yyyy-mm-dd')
})
// 由于element-ui没有提供install方法
Vue.use(ElementUI)
// Vue.prototype.$message = Message

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
