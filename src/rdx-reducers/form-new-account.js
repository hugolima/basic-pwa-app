import { UPDATE_FORM_VALUES, CLEAN_FORM_VALUES } from '../rdx-actions/form-new-account'

const initState = {
  login: '',
  password: '',
  name: '',
  email: '',
  loginError: '',
  passwordError: '',
  nameError: '',
  emailError: '',
}

export default function formNewAccount(state = initState, action) {
  switch (action.type) {
    case UPDATE_FORM_VALUES:
      return { ...state, ...action.values }

    case CLEAN_FORM_VALUES:
      return { ...state, ...initState }

    default:
      return state
  }
}
