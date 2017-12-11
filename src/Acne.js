import React, { Component } from 'react';
import Alcohol from './acneComp/Alcohol';
import AA from './acneComp/AA';
import BP from './acneComp/BP';
import BHA from './acneComp/BHA';
import SA from './acneComp/SA';
import Retinol from './acneComp/Retinol';

export default class Acne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: { alcohol: "Alcohol", azelaicacid: "Azelaic Acid", benzoylperoxide: "Benzoyl Peroxide", bha: "BHA", retinol: "Retinol", salicylicacid: "Salicylic Acid" },
      currentTag: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(key){
    this.setState({currentTag: key});
  }

  render() {
    return (
      <div>

        <p className="sub-title">Acne</p>

        <div className="tags">
          {Object.keys(this.state.tags).map(key => (
            <div className="singletag" key={key}>
              <p className="homepage-link" onClick={() => this.handleClick(key)}>{this.state.tags[key]}</p>
            </div>
          ))}
        </div>

        {this.state.currentTag === '' &&  (
          <div className="center-text"><i className="fa fa-hand-pointer-o" aria-hidden="true"></i><p>(Select an ingredient to learn more)</p></div>
        )}
        {this.state.currentTag === 'alcohol' &&  (<Alcohol />)}
        {this.state.currentTag === 'azelaicacid' &&  (<AA />)}
        {this.state.currentTag === 'benzoylperoxide' &&  (<BP />)}
        {this.state.currentTag === 'bha' &&  (<BHA />)}
        {this.state.currentTag === 'retinol' &&  (<Retinol />)}
        {this.state.currentTag === 'salicylicacid' &&  (<SA />)}

      </div>
    )
  }

}