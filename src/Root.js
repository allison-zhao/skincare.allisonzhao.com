import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import { SingleConcern } from './SingleConcern';
import GetLucky from './GetLucky';
import { AcneIngredients, AgingIngredients, BrighteningIngredients, DrynessIngredients } from './categories';

export const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/acne"
              render={props => (
                <SingleConcern {...props} name="Acne" categories={AcneIngredients} />
              )}
            />
            <Route
              exact
              path="/aging"
              render={props => (
                <SingleConcern {...props} name="Aging" categories={AgingIngredients} />
              )}
            />
            <Route
              exact
              path="/brightening"
              render={props => (
                <SingleConcern {...props} name="Brightening" categories={BrighteningIngredients} />
              )}
            />
            <Route
              exact
              path="/dryness"
              render={props => (
                <SingleConcern {...props} name="Dryness" categories={DrynessIngredients} />
              )}
            />

            <Route exact path="/get-lucky" component={GetLucky} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

