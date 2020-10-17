import React, { Component } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './Dashboard'
import Tabledata from './Tabledata'

export class MainApp extends Component {
  render() {
    return (
      <Router>
          <Nav />
          <Sidebar />
          <div className="main-content-wrapper">
            <Switch>
              <Route path="/main/dashboard">
                <Dashboard />
              </Route>
              <Route path="/main/table">
                <Tabledata />
              </Route>
            </Switch>
          </div>
      </Router>
    );
  }
}

export default MainApp
