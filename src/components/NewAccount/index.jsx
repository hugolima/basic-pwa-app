import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateFormValues, save as saveAction, cleanFormValues } from '../../rdx-actions/form-new-account'

const buttonStyle = {
  marginTop: 25,
  marginRight: 7,
}

function NewAccount({
  formValues, updateValues, save, cleanValues, history,
}) {
  return (
    <div style={{ marginTop: 10 }}>
      <TextField
        id="login"
        hintText="Login"
        floatingLabelText="Login"
        value={formValues.login}
        errorText={formValues.loginError}
        onChange={e => updateValues({ login: e.target.value })}
      />
      <br />
      <TextField
        id="name"
        hintText="Nome"
        floatingLabelText="Nome"
        value={formValues.name}
        errorText={formValues.nameError}
        onChange={e => updateValues({ name: e.target.value })}
      />
      <br />
      <TextField
        id="email"
        hintText="E-mail"
        floatingLabelText="E-mail"
        value={formValues.email}
        errorText={formValues.emailError}
        onChange={e => updateValues({ email: e.target.value })}
      />
      <br />
      <TextField
        id="password"
        hintText="Senha"
        floatingLabelText="Senha"
        type="password"
        value={formValues.password}
        errorText={formValues.passwordError}
        onChange={e => updateValues({ password: e.target.value })}
      />
      <br />
      <RaisedButton
        label="Criar"
        secondary={true}
        style={buttonStyle}
        onClick={() => save().then(() => history.replace('/login'))}
      />
      <RaisedButton label="Limpar" style={buttonStyle} onClick={cleanValues} />
    </div>
  )
}

NewAccount.propTypes = {
  formValues: PropTypes.shape({
    login: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    loginError: PropTypes.string,
    passwordError: PropTypes.string,
    nameError: PropTypes.string,
    emailError: PropTypes.string,
  }).isRequired,
  updateValues: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  cleanValues: PropTypes.func.isRequired,
  history: PropTypes.shape({ replace: PropTypes.func }).isRequired,
}

const mapStateToProps = state => ({
  formValues: state.formNewAccount,
})

const mapDispatchToProps = dispatch => ({
  updateValues: values => dispatch(updateFormValues(values)),
  save: () => dispatch(saveAction()),
  cleanValues: () => dispatch(cleanFormValues()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewAccount))
