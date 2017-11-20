import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedUser } from '../../rdx-actions/logged-user'

class Init extends React.Component {
  componentDidMount() {
    this.props.getLoggedUser()
  }

  render() {
    return this.props.user.login !== '' ? (
      <Redirect
        to={{
          pathname: '/received',
          state: { referrer: '/received' },
        }}
      />
    ) : (
      <div>
        <span>Carregando...</span>
      </div>
    )
  }
}

Init.defaultProps = {
  user: {},
}

Init.propTypes = {
  getLoggedUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
}

const mapStateToProps = state => ({
  user: state.loggedUser,
})

const mapDispatchToProps = dispatch => ({
  getLoggedUser: () => dispatch(getLoggedUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Init)
