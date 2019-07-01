import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/signup" component={SignUpPage}></Route>
        <PrivateRoute path="/user" component={UserPage} />
        <PrivateRoute path="/pannel" component={PannelHome} /> */}
        <Route component={Error}></Route>
      </Switch>
  </Router>
  );
}

export default App;
