import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class PropertyDetail extends Component {
  render() {
    const jsonData = this.props.data[Object.keys(this.props.data)[1]];

    if (!jsonData) {
      return <div></div>
    } else if (!jsonData.response) {
      return <h1>Could not find the property detail at this location!</h1>
    }

    const { response: { results: { result } } } = jsonData;

    if (!result.address) {
      return <h1>Could not find the property detail at this location!</h1>
    }

    return (
      <div className="card-group" style={{marginTop: "10px"}}>
        <div className="card text-white bg-dark">
          <div className="card-header">Address & Geolocation</div>
          <div className="card-body">
            <h6 className="card-title">Address</h6>
            <p className="card-text"><small className="text-muted">{result.address.street._text}, {result.address.city._text},{result.address.state._text} {result.address.zipcode._text}</small></p>
            <h6 className="card-title">Latitude & Longitude</h6>
            <p className="card-text"><small className="text-muted">{result.address.latitude._text}, {result.address.longitude._text}</small></p>
          </div>
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">About This Property</div>
          <div className="card-body">
            <h6 className="card-title">Year Built</h6>
            <p className="card-text"><small className="text-muted">{result.yearBuilt._text}</small></p>
            <h6 className="card-title">Square FT</h6>
            <p className="card-text"><small className="text-muted">{result.finishedSqFt._text}</small></p>
            <h6 className="card-title">Lot Size Square FT</h6>
            <p className="card-text"><small className="text-muted">{result.lotSizeSqFt._text}</small></p>
            <h6 className="card-title">Bedrooms</h6>
            <p className="card-text"><small className="text-muted">{result.bedrooms._text}</small></p>
            <h6 className="card-title">Bathrooms</h6>
            <p className="card-text"><small className="text-muted">{result.bathrooms._text}</small></p>
          </div>
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">Last Transaction</div>
          <div className="card-body">
            <h6 className="card-title">Last Sold Data</h6>
            <p className="card-text"><small className="text-muted">{result.lastSoldDate._text}</small></p>
            <h6 className="card-title">Last Sold Price</h6>
            <p className="card-text"><small className="text-muted">${result.lastSoldPrice._text}</small></p>
          </div>
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">Tax Assessment</div>
          <div className="card-body">
            <h6 className="card-title">Year</h6>
            <p className="card-text"><small className="text-muted">{result.taxAssessmentYear._text}</small></p>
            <h6 className="card-title">Price</h6>
            <p className="card-text"><small className="text-muted">${result.taxAssessment._text}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ propData: { data } }) {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(PropertyDetail);
