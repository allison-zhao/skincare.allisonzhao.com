import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Acne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: ["Alcohol", "Azelaic Acid", "Benzoyl Peroxide", "BHA", "Retinol", "Salicylic Acid"]
    };
  }

  render() {
    return (
      <div>

        <p className="sub-title">Acne</p>

        <div className="tags">
          {this.state.tags.map(tag => (
            <div className="singletag">
              <p>{tag}</p>
            </div>
          ))}
        </div>

      </div>
    )
  }

}