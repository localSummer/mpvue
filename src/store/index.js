/**
 * Created by wxw on 18-7-18.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  test: 0,
  userInfo: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
