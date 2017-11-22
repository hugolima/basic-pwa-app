import { saveObject } from '../commons/local-storage'
import { updateLoggedUser } from './logged-user'

export const UPDATE_FORM_VALUES = 'UPDATE/LOGIN/FORM_VALUES'
export const CLEAN_FORM_VALUES = 'CLEAN/LOGIN/FORM_VALUES'

export const updateFormValues = values => ({
  type: UPDATE_FORM_VALUES,
  values,
})

export const cleanFormValues = () => ({
  type: CLEAN_FORM_VALUES,
})

function validateForm(formValues, dispatch) {
  let validated = true

  if (formValues.login === '') {
    validated = false
    dispatch(updateFormValues({ loginError: 'Informe um login' }))
  }

  if (formValues.password === '') {
    validated = false
    dispatch(updateFormValues({ passwordError: 'Informe a senha' }))
  }

  return validated
}

export const login = () => (dispatch, getState) => {
  const formValues = getState().formLogin
  const user = {
    login: 'hugolima',
    name: 'Hugo Lima',
    email: 'hlglima@gmail.com',
  }

  dispatch(updateFormValues({ loginError: '', passwordError: '' }))

  if (validateForm(formValues, dispatch)) {
    saveObject('tkna', 'TESTE')

    dispatch(updateLoggedUser(user))
    dispatch(cleanFormValues())

    return Promise.resolve()
  }

  return new Promise((resolve, reject) => reject())
}
