import * as types from "../configType";

export function addTracker() {
  return {
    type: types.SHOW_ADD_TRACKER,
    addNewTracker : true
  };
}
export function hideAddTracker() {
  return {
    type: types.HIDE_ADD_TRACKER,
    addNewTracker : false
  };
}
export function switchTracker() {
  return {
    type: types.SWITCH_TRACKER,

  };
}

