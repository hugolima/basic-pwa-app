import { combineReducers } from 'redux'
import formLogin from './form-login'
import formProfile from './form-profile'
import formNewAccount from './form-new-account'
import loggedUser from './logged-user'

export default combineReducers({
  loggedUser,
  formLogin,
  formProfile,
  formNewAccount,
})
