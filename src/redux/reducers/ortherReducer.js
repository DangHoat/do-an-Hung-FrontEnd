import * as types from '../configType'
const initialState = {
    addNewTracker: false,
    thisTracker : undefined
  }
export default (state = initialState, actions) => {
    switch (actions.type) {
      case types.SWITCH_TRACKER:
        return {...state }
      case types.SHOW_ADD_TRACKER:
      case types.HIDE_ADD_TRACKER:
        return {...state, addNewTracker: actions.addNewTracker}
      default:
        return state
    }
  }