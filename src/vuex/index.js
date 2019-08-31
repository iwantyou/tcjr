import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
import jscookie from 'js-cookie'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    login: false,
    token: jscookie.get('token')
  },
  module: {
    user
  }
})
export default store
