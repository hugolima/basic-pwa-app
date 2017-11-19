import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import MainMenu from './mainMenu'

const titles = {
  received: 'Recebidos',
  sent: 'Enviados',
}

class MainAppBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleToggle = () => this.setState({ menuOpen: !this.state.menuOpen })

  handleClose = () => this.setState({ menuOpen: false })

  render() {
    return (
      <div>
        <AppBar
          title={titles[this.props.location.pathname.substring(1)]}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <MainMenu open={this.state.menuOpen} handleClose={this.handleClose} />
      </div>
    )
  }
}

MainAppBar.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
}

export default MainAppBar
