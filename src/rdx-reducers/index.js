import { combineReducers } from 'redux'
import formLogin from './form-login'
import loggedUser from './logged-user'

export default combineReducers({ formLogin, loggedUser })
