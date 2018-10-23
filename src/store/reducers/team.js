import { handleActions } from 'redux-actions'
import { MODIFY_TEAM } from '../types'

export default handleActions({
  [ MODIFY_TEAM ] (state,action) {
    return {
      ...state,
      ...action.payload
    }
  }
}, {
  name: null,
  desc: null,
  ddl: null,
  maxMember: null,
  currentMember: null,
  members: null,
  notice: null
})
