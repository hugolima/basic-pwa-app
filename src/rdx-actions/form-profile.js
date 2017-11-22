import { updateLoggedUser } from './logged-user'

export const UPDATE_FORM_VALUES = 'UPDATE/PROFILE/FORM_VALUES'

export const updateFormValues = values => ({
  type: UPDATE_FORM_VALUES,
  values,
})

function validateForm(formValues, dispatch) {
  let validated = true

  if (formValues.password === '') {
    validated = false
    dispatch(updateFormValues({ passwordError: 'Informe a senha' }))
  }

  if (formValues.name === '') {
    validated = false
    dispatch(updateFormValues({ nameError: 'Informe o nome' }))
  }

  if (formValues.email === '') {
    validated = false
    dispatch(updateFormValues({ emailError: 'Informe um e-mail' }))
  }

  return validated
}

export const save = () => (dispatch, getState) => {
  const formValues = getState().formProfile

  dispatch(updateFormValues({ passwordError: '', nameError: '', emailError: '' }))

  if (validateForm(formValues, dispatch)) {
    dispatch(updateFormValues({ password: '' }))
    dispatch(updateLoggedUser({
      name: formValues.name,
      email: formValues.email,
    }))

    return Promise.resolve()
  }

  return new Promise((resolve, reject) => reject())
}
