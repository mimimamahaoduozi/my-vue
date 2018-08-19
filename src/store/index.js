import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './geters'
Vue.use(Vuex)

const state = {
  foodlists: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
