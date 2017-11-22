import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { updateFormValues, save as saveAction } from '../../rdx-actions/form-profile'

const buttonStyle = {
  marginTop: 25,
  marginRight: 7,
}

class Profile extends React.Component {
  componentDidMount() {
    this.props.updateValues({
      name: this.props.user.name,
      email: this.props.user.email,
    })
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <TextField
          id="name"
          hintText="Nome"
          floatingLabelText="Nome"
          value={this.props.formValues.name}
          errorText={this.props.formValues.nameError}
          onChange={e => this.props.updateValues({ name: e.target.value })}
        />
        <br />
        <TextField
          id="email"
          hintText="E-mail"
          floatingLabelText="E-mail"
          value={this.props.formValues.email}
          errorText={this.props.formValues.emailError}
          onChange={e => this.props.updateValues({ email: e.target.value })}
        />
        <br />
        <TextField
          id="password"
          hintText="Senha"
          floatingLabelText="Senha"
          type="password"
          value={this.props.formValues.password}
          errorText={this.props.formValues.passwordError}
          onChange={e => this.props.updateValues({ password: e.target.value })}
        />
        <br />
        <RaisedButton label="Salvar" secondary={true} style={buttonStyle} onClick={this.props.save} />
      </div>
    )
  }
}

Profile.propTypes = {
  formValues: PropTypes.shape({
    password: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    passwordError: PropTypes.string,
    nameError: PropTypes.string,
    emailError: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  updateValues: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  formValues: state.formProfile,
  user: state.loggedUser,
})

const mapDispatchToProps = dispatch => ({
  updateValues: values => dispatch(updateFormValues(values)),
  save: () => dispatch(saveAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
