/**
 * Created by wxw on 18-7-18.
 */
import {
  TEST,
  USER_INFO
} from './types'

export default {
  [TEST] (state, v) {
    state.test = v
  },
  [USER_INFO] (state, v) {
    state.userInfo = v
  }
}
