import React, { Component } from 'react';

class SearchDisplay extends Component {
  render() {
    return (
      <div>
        <ul>
          <li key="1sdf">{this.props.type}</li>
          <li key="3sdf">{this.props.fullAddress}</li>
          <li key="ey1">{this.props.yearBuilt}</li>
        </ul>
      </div>
    );
  }
}
// "5aff39972ac57e0b2537fda6"

export default SearchDisplay;
