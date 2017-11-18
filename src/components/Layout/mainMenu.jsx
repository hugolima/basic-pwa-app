import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

function MainMenu({ open, handleClose }) {
  return (
    <div>
      <Drawer docked={false} width={200} open={open} onRequestChange={handleClose}>
        <MenuItem onClick={handleClose}>Menu Item</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  )
}

MainMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default MainMenu
