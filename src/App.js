import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainApp from './components/MainApp';

function App() {
  return (
    <div id="main-wrapper" className="theme-default">
      <Router>
        <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>
            <Route path='/main'>
              <MainApp/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
