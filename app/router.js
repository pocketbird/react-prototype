import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import MainLayout from './components/layouts/main-layout'
import Inbox from './components/inbox'
import FourOhFour from './components/views/404'

class AppRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainLayout}>
          <IndexRoute component={Inbox} />
          <Route path='*' component={FourOhFour} />
        </Route>
      </Router>
    )
  }
}

export default AppRouter
