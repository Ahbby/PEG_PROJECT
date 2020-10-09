import React, { Component } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './Dashboard'

export class MainApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav/>
                    <Sidebar/>
                </div>
                <Switch>
                <div id="layout-wrapper">
                    <Route path="/main/dashboard"> <Dashboard/> </Route>
                </div>
                </Switch>
            </Router>
        )
    }
}

export default MainApp
