import { UPDATE_LOGGED_USER } from '../rdx-actions/logged-user'

const initState = {
  login: '',
  name: '',
  email: '',
}

export default function loggedUser(state = initState, action) {
  switch (action.type) {
    case UPDATE_LOGGED_USER:
      return { ...state, ...action.user }

    default:
      return state
  }
}
