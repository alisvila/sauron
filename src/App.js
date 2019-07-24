import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import PannelHome from './components/Pannel/Home'
import User from './components/Pannel/User'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/signup" component={SignUpPage}></Route> */}
        <Route path="/user" component={User} />
        <Route path="/pannel" component={PannelHome} /> 
        <Route component={Error}></Route>
      </Switch>
  </Router>
  );
}

export default App;
