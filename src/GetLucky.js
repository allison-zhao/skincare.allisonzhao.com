import React, { Component } from 'react';


export default class GetLucky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: ["hydrate", "brightening", "clear acne", "anti-aging", "reduce redness", "exfoliate"]
    }
  }

  render() {
    return (
      <div>
        <div className="getlucky-title">
          <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
          <p>Select your skin goals</p>
        </div>

        <div className="getlucky-grid">
          {this.state.goals.map(tag => <div className="getlucky-tag" key={this.state.goals.indexOf(tag)}>{tag}</div>)}
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
      </div>
    )
  }

}

