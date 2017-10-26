import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Acne from './Acne';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/acne" component={Acne} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

