import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function Init({ user }) {
  return user.login !== '' ? (
    <Redirect
      to={{
        pathname: '/received',
        state: { referrer: '/received' },
      }}
    />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { referrer: '/login' },
      }}
    />
  )
}

Init.propTypes = {
  user: PropTypes.shape({ login: PropTypes.string }).isRequired,
}

const mapStateToProps = state => ({
  user: state.loggedUser,
})

export default connect(mapStateToProps)(Init)
