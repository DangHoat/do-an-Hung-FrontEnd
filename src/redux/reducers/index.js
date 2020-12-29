import {combineReducers} from 'redux'
import { reducer as toastr } from "react-redux-toastr";
import auth from './authReducer'
export default combineReducers({
    toastr,
    auth
})