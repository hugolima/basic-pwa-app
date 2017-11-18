import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Received from './components/Received'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <MuiThemeProvider>
    <Received />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
