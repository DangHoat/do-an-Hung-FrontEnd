import * as types from "../configType";

export function addTracker() {
  return {
    type: types.SHOW_ADD_TRACKER,
    addNewTracker : true
  };
}
export function switchTracker() {
  return {
    type: types.SWITCH_TRACKER,

  };
}

