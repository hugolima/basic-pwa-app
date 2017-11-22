import { combineReducers } from 'redux'
import formLogin from './form-login'
import formProfile from './form-profile'
import loggedUser from './logged-user'

export default combineReducers({ formLogin, formProfile, loggedUser })
