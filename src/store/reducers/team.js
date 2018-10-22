import { handleActions } from 'redux-actions'
import { MODIFY_NOTICE } from '../types'

export default handleActions({
  [ MODIFY_NOTICE ] (state,action) {
    return {
      ...state,
      notice: action.payload.notice
    }
  }
}, {
  notice: null
})
