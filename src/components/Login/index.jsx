import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { updateFormValues, login as loginAction, cleanFormValues } from '../../rdx-actions/form-login'

const buttonStyle = {
  marginTop: 25,
  marginRight: 7,
}

function Login({
  formValues, updateValues, login, cleanValues,
}) {
  return (
    <div style={{ marginTop: 20 }}>
      <TextField
        value={formValues.login}
        hintText="login"
        errorText={formValues.loginError}
        onChange={e => updateValues({ login: e.target.value })}
      />
      <br />
      <TextField
        value={formValues.password}
        hintText="password"
        type="password"
        errorText={formValues.passwordError}
        onChange={e => updateValues({ password: e.target.value })}
      />
      <br />
      <RaisedButton label="Login" secondary={true} style={buttonStyle} onClick={login} />
      <RaisedButton label="Limpar" style={buttonStyle} onClick={cleanValues} />
    </div>
  )
}

Login.propTypes = {
  formValues: PropTypes.shape({ login: PropTypes.string, password: PropTypes.string }).isRequired,
  updateValues: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  cleanValues: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  formValues: state.formLogin,
})

const mapDispatchToProps = dispatch => ({
  updateValues: values => dispatch(updateFormValues(values)),
  login: () => dispatch(loginAction()),
  cleanValues: () => dispatch(cleanFormValues()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
