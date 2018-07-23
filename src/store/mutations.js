/**
 * Created by wxw on 18-7-18.
 */
import {
  ADD_TEST,
  UPDATE_SELECT_DATE
} from './types'

export default {
  [ADD_TEST] (state, num) {
    state.test += num
  },
  [UPDATE_SELECT_DATE] (state, date) {
    state.selectDate.startDate = date.startDate
    state.selectDate.endDate = date.endDate
  }
}
