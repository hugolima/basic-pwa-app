import React from 'react'
import { Redirect } from 'react-router-dom'

class Init extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLogged: true }
  }

  componentDidMount() {}

  render() {
    return this.state.isLogged ? (
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

export default Init
