import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import MainAppBar from './components/Layout/mainAppBar'
import Init from './components/Init'
import Received from './components/Received'
import Sent from './components/Sent'
import Login from './components/Login'

const store = configureStore()

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Init} />
            <Route path="/" component={MainAppBar} />
          </Switch>
          <Route path="/received" component={Received} />
          <Route path="/sent" component={Sent} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
