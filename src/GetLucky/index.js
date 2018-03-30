import React, { Component } from 'react';
import productRecs from './Products';

const pairs = {
  hydrate: 'hydrate',
  brightening: 'brightening',
  clearacne: 'clear acne',
  antiaging: 'anti-aging',
  sensitive: 'sensitive skin',
  exfoliate: 'exfoliate'
};

export default class GetLucky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: ['hydrate', 'brightening', 'clear acne', 'anti-aging', 'sensitive skin', 'exfoliate'],
      selectedTags: [],
      recommendedProducts: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();

    const fuseTag = (tagName, productKey) => {
      if (this.state.selectedTags.includes(tagName)) {
        let currentConcern = productRecs[productKey];
        this.setState(({ recommendedProducts }) => {
          return { recommendedProducts: [...recommendedProducts, currentConcern] };
        });
      };
    };

    Object.keys(pairs).forEach(key => {
      fuseTag(pairs[key], key);
    });
  };

  handleClick(tag) {
    this.setState(({ selectedTags }) => {
      if (selectedTags.includes(tag)) {
        return {
          selectedTags: selectedTags.filter(curTag => curTag !== tag)
        };
      };

      return { selectedTags: [...selectedTags, tag] };
    });
  };

  render() {
    return (
      <div className="getlucky-container">
        <div className="getlucky-title">
          <i className="fa fa-hand-peace-o" aria-hidden="true" />
          <p>Select your #skingoals</p>
        </div>

        <div className="getlucky-grid">
          {this.state.goals.map(tag => (
            <div
              className={`getlucky-tag ${this.state.selectedTags.includes(tag) ? 'active' : ''}`}
              key={this.state.goals.indexOf(tag)}
              onClick={() => this.handleClick(tag)}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="getlucky-budget">
          <p className="small-title">Preferred Budget:</p>
          <form onSubmit={event => this.handleSubmit(event)}>
            <select name="selectedBudget" className="budget-dropdown">
              <option value="30">$20</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
            </select>
            <button type="submit" className="btn">
              Get Lucky!
            </button>
          </form>
        </div>

        <ul className="getlucky-recommendation">
          {this.state.recommendedProducts.map(products => {
            return products.map(product => (
              <li className="getlucky-eachproduct" key={product.name}>
                <i className="fa fa-terminal fa-lg" aria-hidden="true" /> {product.name} {product.price}
              </li>
            ))}
          )}
        </ul>

        {this.state.recommendedProducts.length > 0 && (
          <button className="clear-btn" onClick={() => this.setState({ recommendedProducts: [] })}>
            Clear
          </button>
        )}
      </div>
    );
  };
};
