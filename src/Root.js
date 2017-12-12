import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import { SingleConcern } from './SingleConcern';
import GetLucky from './GetLucky';
import { Acne } from './categories';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* load single concern instead of hard-coded components */}
              <Route exact path="/acne" render={props => <SingleConcern {...props} name="Acne" categories={Acne} />} />
              {/* <Route path="/aging" component={singleConcern} /> 
              <Route path="/brightening" component={singleConcern} /> 
              <Route path="/dryness" component={singleConcern} /> 
              <Route path="/exfoliate" component={singleConcern} /> 
              <Route path="/pigmentation" component={singleConcern} /> 
              <Route path="/healing" component={singleConcern} /> 
              <Route path="/calming" component={singleConcern} />  */}
              <Route exact path="/get-lucky" component={GetLucky} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

//<Route exact path="/categories/:name" render={props => <SingleCategoryContainer {...props} categories={this.props.categories}/>}/>
