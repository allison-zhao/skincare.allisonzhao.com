import React, { Component } from 'react';
import { Acne } from './acneComp';

export class SingleConcern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.categories,
      currentTag: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    this.setState({ currentTag: key });
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <p className="sub-title">{name}</p>

        <div className="tags">
          {Object.keys(this.state.tags).map(key => (
            <div className="singletag" key={key}>
              <p className="homepage-link" onClick={() => this.handleClick(key)}>
                {this.state.tags[key]}
              </p>
            </div>
          ))}
        </div>

        {this.state.currentTag === '' && (
          <div className="center-text">
            <i className="fa fa-hand-pointer-o" aria-hidden="true" />
            <p>(Select an ingredient to learn more)</p>
          </div>
        )}
        {this.state.currentTag === 'alcohol' && <Acne data="Alcohol" />}
        {this.state.currentTag === 'azelaicacid' && <Acne data="AA" />}
        {this.state.currentTag === 'benzoylperoxide' && <Acne data="BP" />}
        {this.state.currentTag === 'bha' && <Acne data="BHA" />}
        {this.state.currentTag === 'retinol' && <Acne data="Retinol" />}
        {this.state.currentTag === 'salicylicacid' && <Acne data="SA" />}
      </div>
    );
  }
}
