import React from 'react';
import acneIngredients from './acneIngredients.json';

export const Acne = ({ selectedIngre }) => {
  return (
    <div className="ingredient">
      <i className="fa fa-magic" aria-hidden="true" />
      <p>{acneIngredients[selectedIngre].name}</p>
      <p>
        <i className="fa fa-smile-o" aria-hidden="true" />
        {acneIngredients[selectedIngre].pros}</p>
      <p>
        <i className="fa fa-frown-o" aria-hidden="true" />
        {acneIngredients[selectedIngre].cons}
      </p>
    </div>
  );
};
