import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import CallReceived from 'material-ui/svg-icons/communication/call-received'
import CallMade from 'material-ui/svg-icons/communication/call-made'
import Account from 'material-ui/svg-icons/action/account-circle'
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run'
import { connect } from 'react-redux'
import { logout as logoutAction } from '../../rdx-actions/logged-user'

const linkStyle = {
  textDecoration: 'none',
}

const linkActiveStyle = {
  fontWeight: 'bold',
  textDecoration: 'none',
}

function MainMenu({
  user, open, handleClose, logout, history,
}) {
  return (
    <Drawer docked={false} width={200} open={open} onRequestChange={handleClose}>
      {user.login !== '' && (
        <Menu>
          <NavLink to="/received" style={linkStyle} activeStyle={linkActiveStyle}>
            <MenuItem onClick={handleClose} leftIcon={<CallReceived />}>
              Recebidos
            </MenuItem>
          </NavLink>
          <NavLink to="/sent" style={linkStyle} activeStyle={linkActiveStyle}>
            <MenuItem onClick={handleClose} leftIcon={<CallMade />}>
              Enviados
            </MenuItem>
          </NavLink>
          <NavLink to="/profile" style={linkStyle} activeStyle={linkActiveStyle}>
            <MenuItem onClick={handleClose} leftIcon={<Account />}>
              Alterar Perfil
            </MenuItem>
          </NavLink>
          <MenuItem
            leftIcon={<DirectionsRun />}
            onClick={() =>
              logout().then(() => {
                history.replace('/login')
                handleClose()
              })
            }
          >
            Logout
          </MenuItem>
        </Menu>
      )}
      {user.login === '' && (
        <Menu>
          <NavLink to="/login" style={linkStyle} activeStyle={linkActiveStyle}>
            <MenuItem onClick={handleClose} leftIcon={<DirectionsRun />}>
              Login
            </MenuItem>
          </NavLink>
          <NavLink to="/new_account" style={linkStyle} activeStyle={linkActiveStyle}>
            <MenuItem onClick={handleClose} leftIcon={<Account />}>
              Criar Conta
            </MenuItem>
          </NavLink>
        </Menu>
      )}
    </Drawer>
  )
}

MainMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape({ replace: PropTypes.func }).isRequired,
}

const mapStateToProps = state => ({
  user: state.loggedUser,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainMenu))
