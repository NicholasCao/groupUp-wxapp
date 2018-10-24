import { handleActions } from 'redux-actions'
import { MODIFY_USERID } from '../types'

export default handleActions({
  [ MODIFY_USERID ] (state,action) {
    return {
      ...state,
      id: action.payload
    }
  }
}, {
  id: null
})
