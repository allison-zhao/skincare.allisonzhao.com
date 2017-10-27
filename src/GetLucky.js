import React, { Component } from 'react';


export default class GetLucky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: ["hydrate", "brightening", "clear acne", "anti-aging", "sensitive skin", "exfoliate"],
      hydrate: ["Neutrogena® Hydro Boost", "H2O+ AquaDefense Shielding Matcha Facial Essence", "Caudalie Vine Activ Overnight Detox Night Oil"],
      brightening: ["Dr. Jart+ Rubber Mask Bright Lover", "Olay Luminous Miracle Boost Concentrate", "Mario Badescu Vitamin C Serum"],
      clearacne: ["Kiehl’s Breakout Control Targeted Acne Spot Treatment", "Clinique Acne Solutions Clinical Clearing Gel", "La Roche-Posay Effaclar Dermatological 3-Step Acne System"],
      sensitive: ["Rodan + Fields Soothe Gentle Cream Wash", "La Roche-Posay Toleriane Double Repair Moisturizer UV Broad Spectrum SPF 30", "Dr. Andrew Weil for Origins Mega-Mushroom Skin Relief Advanced Face Serum"],
      antiaging: ["StriVectin Retinol Eye Cream", "Shiseido Ultimune Power Infusing Concentrate", "RoC Retinol Correxion Deep Wrinkle Daily Moisturizer"],
      exfoliate: ["Philosophy Purity Made Simple Pore Extractor Exfoliating Clay Mask", "Skinfix Facial Exfoliating Pads", "BareMinerals Clay Chameleon Transforming Purifying Cleanser"],
      selectedTags: [],
      recommendedProducts: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <div className="getlucky-title">
          <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
          <p>Select your #skingoals</p>
        </div>

        <div className="getlucky-grid">
          {this.state.goals.map(tag =>
            <div
              className={`getlucky-tag ${this.state.selectedTags.includes(tag) ? 'active' : ''}`}
              key={this.state.goals.indexOf(tag)}
              onClick={() => this.handleClick(tag)}>{tag}</div>
          )}
        </div>

        <div className="getlucky-budget">
          <p className="small-title">Preferred Budget:</p>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <select name="selectedBudget" className="budget-dropdown">
              <option value="10">$10</option>
              <option value="30">$30</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="300">$300</option>
            </select>
            <button type="submit" className="btn">Get Lucky!</button>
          </form>
        </div>

        <ul className="getlucky-recommendation">
          {this.state.recommendedProducts.map(product => (
            <li className="getlucky-eachproduct" key={product}><i className="fa fa-terminal fa-lg" aria-hidden="true"></i> {product}</li>
          ))}
        </ul>

        {this.state.recommendedProducts.length > 0 && (
          <button className="clear-btn" onClick={() => this.setState({ recommendedProducts: [] })}>Clear</button>
        )}

      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();

    const fuseTag = (tagName, stateKey) => {
      if (this.state.selectedTags.includes(tagName)) {
        this.setState(({ recommendedProducts }) => {
          return { recommendedProducts: [...recommendedProducts, ...this.state[stateKey]] };
        })
      }
    }

    const pairs = { hydrate: 'hydrate', brightening: "brightening", clearacne: "clear acne", antiaging: "anti-aging", sensitive: "sensitive skin", exfoliate: "exfoliate" }

    Object.keys(pairs).forEach(key => {
      fuseTag(pairs[key], key);
    })
  }

  handleClick(tag) {
    this.setState(({ selectedTags }) => {
      if (selectedTags.includes(tag)) {
        return {
          selectedTags: selectedTags.filter(curTag => curTag !== tag)
        };
      }

      return { selectedTags: [...selectedTags, tag] };
    });
  }

}

