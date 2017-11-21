import { saveObject } from '../commons/local-storage'

export const UPDATE_LOGGED_USER = 'UPDATE/LOGGED_USER'

const updateLoggedUser = user => ({
  type: UPDATE_LOGGED_USER,
  user,
})

export const login = (userName, pwd) => (dispatch) => {
  const user = {
    login: 'hugolima',
    name: 'Hugo Lima',
    email: 'hlglima@gmail.com',
  }

  saveObject('token', pwd)
  dispatch(updateLoggedUser(user))

  return Promise.resolve()
}
