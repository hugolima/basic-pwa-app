export const UPDATE_LOGGED_USER = 'UPDATE/LOGGED_USER'

export const updateLoggedUser = user => ({
  type: UPDATE_LOGGED_USER,
  user,
})
