import * as types from '../configType'
const initialState = {
    addNewTracker: false,
    thisTracker : undefined
  }
export default (state = initialState, actions) => {
    console.log(actions)
    switch (actions.type) {
      case types.SWITCH_TRACKER:
        return {...state }
      case types.SHOW_ADD_TRACKER:
        return {...state, addNewTracker:true}
        case types.HIDE_ADD_TRACKER:
        return {...state, addNewTracker:flase}
      default:
        return state
    }
  }