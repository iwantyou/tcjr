import Vue from 'vue'
import Vuex from 'vuex'
import jscookie from 'js-cookie'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    login: false,
    token: jscookie.get('token')
  },
  mutations: {
  }
})
export default store
