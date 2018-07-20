/**
 * Created by wxw on 18-7-18.
 */
import { ADD_TEST } from './types'

export default {
  addTest ({commit}, num) {
    commit(ADD_TEST, num)
  }
}
