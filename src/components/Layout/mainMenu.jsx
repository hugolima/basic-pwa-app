import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import CallReceived from 'material-ui/svg-icons/communication/call-received'
import CallMade from 'material-ui/svg-icons/communication/call-made'
import Account from 'material-ui/svg-icons/action/account-circle'
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run'

const linkStyle = {
  fontWeight: 'bold',
}

function MainMenu({ open, handleClose }) {
  return (
    <div>
      <Drawer docked={false} width={200} open={open} onRequestChange={handleClose}>
        <Menu>
          <NavLink to="/" exact activeStyle={linkStyle}>
            <MenuItem onClick={handleClose} leftIcon={<CallReceived />}>
              Recebidos
            </MenuItem>
          </NavLink>
          <NavLink to="/sent" activeStyle={linkStyle}>
            <MenuItem onClick={handleClose} leftIcon={<CallMade />}>
              Enviados
            </MenuItem>
          </NavLink>
          <MenuItem onClick={handleClose} leftIcon={<Account />}>
            Perfil
          </MenuItem>
          <MenuItem onClick={handleClose} leftIcon={<DirectionsRun />}>
            Logout
          </MenuItem>
        </Menu>
      </Drawer>
    </div>
  )
}

MainMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default MainMenu
