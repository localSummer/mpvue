/**
 * Created by wxw on 18-7-18.
 */
import { UPDATE_SELECT_DATE, UPDATE_SELECT_GAME, UPDATE_SELECT_USER, UPDATE_GAME_ACTIVE_TAB } from './types'

export default {
  updateSelectDate ({commit}, date) {
    commit(UPDATE_SELECT_DATE, date)
  },
  updateSelectGame ({commit}, game) {
    commit(UPDATE_SELECT_GAME, game)
  },
  updateSelectUser ({commit}, user) {
    commit(UPDATE_SELECT_USER, user)
  },
  updateGameActiveTab ({commit}, num) {
    commit(UPDATE_GAME_ACTIVE_TAB, num)
  }
}
