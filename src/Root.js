import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
  PigmentationIngredients,
  HealingIngredients,
  CalmingIngredients
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
            {renderRoute('/healing', 'Healing', HealingIngredients)}
            {renderRoute('/calming', 'Calming', CalmingIngredients)}
            <Route exact path="/get-lucky" component={GetLucky} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
