import {combineReducers} from 'redux'
import { reducer as toastr } from "react-redux-toastr";
import auth from './authReducer'
import orther from './ortherReducer'
export default combineReducers({
    toastr,
    auth,
    orther
})