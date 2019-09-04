import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
import jscookie from 'js-cookie'
import { getters } from './getter'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    login: false,
    token: jscookie.get('token')
  },
  getters,
  modules: {
    user
  }
})
export default store
