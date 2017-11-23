import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import MainAppBar from './components/Layout/mainAppBar'
import Init from './components/Init'
import NewAccount from './components/NewAccount'
import Login from './components/Login'
import Received from './components/Received'
import Sent from './components/Sent'
import Profile from './components/Profile'
import Error404 from './components/Layout/404'

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
          <Switch>
            <Route path="/received" component={Received} />
            <Route path="/sent" component={Sent} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/new_account" component={NewAccount} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
