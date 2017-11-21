import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle = {
  marginTop: 25,
  marginRight: 7,
}

function Login() {
  return (
    <div style={{ marginTop: 20 }}>
      <TextField hintText="login" errorText="" />
      <br />
      <TextField hintText="password" errorText="" />
      <br />
      <RaisedButton label="Login" secondary={true} style={buttonStyle} />
      <RaisedButton label="Limpar" style={buttonStyle} />
    </div>
  )
}

export default Login
