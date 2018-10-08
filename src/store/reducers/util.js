import { handleActions } from 'redux-actions'
import { SET_HEIGHT,SET_STATUSBARHEIGHT } from '../types'

export default handleActions({
  [ SET_HEIGHT] (state,action) {
    return {
      ...state,
      height: action.payload
    }
  },
  [SET_STATUSBARHEIGHT] (state,action) {
    return {
      ...state,
      statusBarHeight: action.payload
    }
  },
}, {
  height: null,
  statusBarHeight: null,
})
