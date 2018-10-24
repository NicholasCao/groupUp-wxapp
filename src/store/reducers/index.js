import { combineReducers } from 'redux'
import util from './util'
import team from './team'
import user from './user'

export default combineReducers({
  util,
  team
})