import { UPDATE_FORM_VALUES } from '../rdx-actions/form-profile'

const initState = {
  password: '',
  name: '',
  email: '',
  passwordError: '',
  nameError: '',
  emailError: '',
}

export default function formProfile(state = initState, action) {
  switch (action.type) {
    case UPDATE_FORM_VALUES:
      return { ...state, ...action.values }

    default:
      return state
  }
}
