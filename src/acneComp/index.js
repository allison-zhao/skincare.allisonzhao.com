import React from 'react';
import acneIngredients from './acneIngredients.json'

const Acne = (props) => {
    return (
      <div className="ingredient">
        <i class="fa fa-magic" aria-hidden="true"></i><p>AZELAIC ACID</p>
        <p><i class="fa fa-smile-o" aria-hidden="true"></i> Kills acne bacteria, reduces inflammation, can lightly improve pigmentation problems</p>
        <p><i class="fa fa-frown-o" aria-hidden="true"></i> Potential side effects include itichiness and irritation</p>
      </div>
    )
}

export default Acne;