/**
 * Created by wxw on 18-7-18.
 */
import { ADD_TEST, UPDATE_SELECT_DATE } from './types'

export default {
  addTest ({commit}, num) {
    commit(ADD_TEST, num)
  },
  updateSelectDate ({commit}, date) {
    commit(UPDATE_SELECT_DATE, date)
  }
}
