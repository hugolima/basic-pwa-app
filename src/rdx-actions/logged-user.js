import { removeItem } from '../commons/local-storage'

export const UPDATE_LOGGED_USER = 'UPDATE/LOGGED_USER'

export const updateLoggedUser = user => ({
  type: UPDATE_LOGGED_USER,
  user,
})

export const logout = () => (dispatch) => {
  removeItem('tkna')
  dispatch(updateLoggedUser({
    login: '',
    name: '',
    email: '',
  }))

  return Promise.resolve()
}
