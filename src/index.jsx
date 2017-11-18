import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Received from './components/Received'
import Sent from './components/Sent'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Received} />
        <Route path="/sent" component={Sent} />
      </div>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
