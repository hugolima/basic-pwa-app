import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './components/Home'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
