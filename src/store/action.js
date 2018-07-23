/**
 * Created by wxw on 18-7-18.
 */
import { UPDATE_SELECT_DATE } from './types'

export default {
  updateSelectDate ({commit}, date) {
    commit(UPDATE_SELECT_DATE, date)
  }
}
