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
  selectDate: {
    startDate: '2018-07-10',
    endDate: '2018-07-11'
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
