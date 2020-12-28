import * as types from '../configType'
const initialState = {
  users:{}
  }
export default (state = initialState, {type} = {}) => {
    switch (type) {
      case types.LOGIN_USER:
        return {...state, y: state.y - 50, r: -30}
      case types.ME_FROM_TOKEN:
        return {...state, y: state.y + 20, r: 0}
      case 'GAME_OVER':
        return initialState
      default:
        return state
    }
  }