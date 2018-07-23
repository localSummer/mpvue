/**
 * Created by wxw on 18-7-18.
 */
import {
  UPDATE_SELECT_DATE
} from './types'

export default {
  [UPDATE_SELECT_DATE] (state, date) {
    state.selectDate.startDate = date.startDate
    state.selectDate.endDate = date.endDate
  }
}
