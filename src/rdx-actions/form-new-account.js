import { updateFormValues as updateLoginForm } from './form-login'

export const UPDATE_FORM_VALUES = 'UPDATE/NEWACCOUNT/FORM_VALUES'
export const CLEAN_FORM_VALUES = 'CLEAN/NEWACCOUNT/FORM_VALUES'

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

  if (formValues.name === '') {
    validated = false
    dispatch(updateFormValues({ nameError: 'Informe o seu nome' }))
  }

  if (formValues.email === '') {
    validated = false
    dispatch(updateFormValues({ emailError: 'Informe um e-mail' }))
  }

  return validated
}

export const save = () => (dispatch, getState) => {
  const formValues = getState().formNewAccount

  dispatch(updateFormValues({
    loginError: '',
    passwordError: '',
    nameError: '',
    emailError: '',
  }))

  if (validateForm(formValues, dispatch)) {
    dispatch(cleanFormValues())
    dispatch(updateLoginForm({ login: formValues.login }))

    return Promise.resolve()
  }

  return new Promise((resolve, reject) => reject())
}
