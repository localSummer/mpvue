/**
 * Created by wxw on 18-7-18.
 */
import {
  UPDATE_SELECT_DATE, UPDATE_SELECT_GAME, UPDATE_SELECT_USER, UPDATE_GAME_ACTIVE_TAB
} from './types'

export default {
  [UPDATE_SELECT_DATE] (state, date) {
    state.selectDate.startDate = date.startDate
    state.selectDate.endDate = date.endDate
  },
  [UPDATE_SELECT_GAME] (state, game) {
    state.selectGame.id = game.id
    state.selectGame.name = game.name
  },
  [UPDATE_SELECT_USER] (state, user) {
    state.selectUser.id = user.id
    state.selectUser.name = user.name
  },
  [UPDATE_GAME_ACTIVE_TAB] (state, num) {
    state.gameActiveTab = num
  }
}
