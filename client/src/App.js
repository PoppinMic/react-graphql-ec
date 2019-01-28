import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Products from './pages/Products';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route component={Products} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={SignUp} path="/signup" />
              <Route component={Checkout} path="/checkout" />

              <Route component={NoMatch} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
