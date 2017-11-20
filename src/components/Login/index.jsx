import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  marginTop: 12,
}

function Login() {
  return (
    <div style={{ marginTop: 15 }}>
      <TextField hintText="login" errorText="" />
      <br />
      <TextField hintText="password" errorText="" />
      <br />
      <RaisedButton label="Login" secondary={true} style={style} />
    </div>
  )
}

export default Login
