import React from 'react';
import acneIngredients from './acneIngredients.json';

export const Acne = props => {
  return (
    <div className="ingredient">
      <i className="fa fa-magic" aria-hidden="true" />
      <p>AZELAIC ACID</p>
      <p>
        <i className="fa fa-smile-o" aria-hidden="true" /> Kills acne bacteria, reduces inflammation,
        can lightly improve pigmentation problems
      </p>
      <p>
        <i className="fa fa-frown-o" aria-hidden="true" /> Potential side effects include itichiness and
        irritation
      </p>
    </div>
  );
};

