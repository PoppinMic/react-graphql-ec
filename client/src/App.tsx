import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SingUp';
import Checkout from './components/Checkout';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route component={Products} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={SignUp} path="/signup" />
            <Route component={Checkout} path="/Checkout" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
