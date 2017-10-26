import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Acne from './Acne';
import GetLucky from './GetLucky';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/acne" component={Acne} />
              <Route exact path="/get-lucky" component={GetLucky} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

