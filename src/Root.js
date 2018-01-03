import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import { SingleConcern } from './SingleConcern';
import GetLucky from './GetLucky';
import {
  AcneIngredients,
  AgingIngredients,
  BrighteningIngredients,
  DrynessIngredients,
  ExfoliateIngredients,
  PigmentationIngredients
} from './categories';

const renderRoute = (path, name, categories) => {
  return (
    <Route
      exact
      path={path}
      render={props => <SingleConcern {...props} name={name} categories={categories} />}
    />
  );
};

export const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {renderRoute('/acne', 'Acne', AcneIngredients)}
            {renderRoute('/aging', 'Aging', AgingIngredients)}
            {renderRoute('/brightening', 'Brightening', BrighteningIngredients)}
            {renderRoute('/dryness', 'Dryness', DrynessIngredients)}
            {renderRoute('/exfoliate', 'Exfoliate', ExfoliateIngredients)}
            {renderRoute('/pigmentation', 'Pigmentation', PigmentationIngredients)}
            <Route exact path="/get-lucky" component={GetLucky} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
