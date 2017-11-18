import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import MainMenu from './mainMenu'

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
        <AppBar title={this.props.title} onLeftIconButtonTouchTap={this.handleToggle} />
        <MainMenu open={this.state.menuOpen} handleClose={() => this.handleClose()} />
      </div>
    )
  }
}

MainAppBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MainAppBar
