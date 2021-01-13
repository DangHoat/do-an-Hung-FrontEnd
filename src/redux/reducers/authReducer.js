import * as types from '../configType'
import {getUser} from '../../../define/SharePreference'
const initialState = {
  
  }
export default (state = initialState, actions) => {
    switch (actions.type) {
      case types.LOGIN_USER:
        return {...state, users : actions.users}
      case types.ME_FROM_TOKEN:
        return {...state, y: state.y + 20, r: 0}
      case types.LOGOUT_USER:
        return { ...state}
      default:
        return state
    }
  }