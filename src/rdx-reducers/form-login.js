import { UPDATE_FORM_VALUES, CLEAN_FORM_VALUES } from '../rdx-actions/form-login'

const initState = {
  login: '',
  password: '',
  loginError: '',
  passwordError: '',
}

export default function formLogin(state = initState, action) {
  switch (action.type) {
    case UPDATE_FORM_VALUES:
      return { ...state, ...action.values }

    case CLEAN_FORM_VALUES:
      return { ...state, ...initState }

    default:
      return state
  }
}
