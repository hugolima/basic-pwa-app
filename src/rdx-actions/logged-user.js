export const UPDATE_LOGGED_USER = 'UPDATE/LOGGED_USER'

const updateLoggedUser = user => ({
  type: UPDATE_LOGGED_USER,
  user,
})

export const getLoggedUser = () => (dispatch) => {
  setTimeout(
    () =>
      dispatch(updateLoggedUser({
        login: 'hugolima',
        name: 'Hugo Lima',
        email: 'hlglima@gmail.com',
      })),
    5000,
  )

  return Promise.resolve()
}

export const login = (userName, pwd) => (dispatch) => {
  const user = {
    token: pwd,
    login: 'hugolima',
    name: 'Hugo Lima',
    email: 'hlglima@gmail.com',
  }

  dispatch(updateLoggedUser(user))
  return Promise.resolve()
}
