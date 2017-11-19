import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainAppBar from './components/Layout/mainAppBar'
import Init from './components/Init'
import Received from './components/Received'
import Sent from './components/Sent'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Init} />
          <Route path="/" component={MainAppBar} />
        </Switch>
        <Route path="/received" component={Received} />
        <Route path="/sent" component={Sent} />
      </div>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
