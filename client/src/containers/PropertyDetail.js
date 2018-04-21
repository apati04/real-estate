import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class PropertyDetail extends Component {
  componentWillUnmount() {
    this.props.resetPropData();
  }

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

    const renderLastSoldData = () => {
      if (!result.lastSoldDate || !result.lastSoldPrice) {
        return (
          <div className="card-body">
            <p className="card-title">Last Sold Data</p>
            <p className="card-text"><small className="text-danger">N/A</small></p>
            <p className="card-title">Last Sold Price</p>
            <p className="card-text"><small className="text-danger">N/A</small></p>
          </div>
        );
      } else {
        return (
          <div className="card-body">
            <p className="card-title">Last Sold Data</p>
            <p className="card-text"><small className="text-warning">{result.lastSoldDate._text}</small></p>
            <p className="card-title">Last Sold Price</p>
            <p className="card-text"><small className="text-warning">${result.lastSoldPrice._text}</small></p>
          </div>
        );
      }
    }

    return (
      <div className="card-group" style={{marginTop: "10px"}}>
        <div className="card text-white bg-dark">
          <div className="card-header">Location</div>
          <div className="card-body">
            <p className="card-title">Address</p>
            <p className="card-text"><small className="text-warning">{result.address.street._text}, {result.address.city._text},{result.address.state._text} {result.address.zipcode._text}</small></p>
            <p className="card-title">Latitude & Longitude</p>
            <p className="card-text"><small className="text-warning">{result.address.latitude._text}, {result.address.longitude._text}</small></p>
          </div>
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">About This Property</div>
          <div className="card-body">
            <p className="card-title">Year Built</p>
            <p className="card-text"><small className="text-warning">{result.yearBuilt._text}</small></p>
            <p className="card-title">Square FT</p>
            <p className="card-text"><small className="text-warning">{result.finishedSqFt._text}</small></p>
            <p className="card-title">Lot Size Square FT</p>
            <p className="card-text"><small className="text-warning">{result.lotSizeSqFt._text}</small></p>
            <p className="card-title">Bedrooms</p>
            <p className="card-text"><small className="text-warning">{result.bedrooms._text}</small></p>
            <p className="card-title">Bathrooms</p>
            <p className="card-text"><small className="text-warning">{result.bathrooms._text}</small></p>
          </div>
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">Last Transaction</div>
          {renderLastSoldData()}
        </div>
        <div className="card text-white bg-dark">
          <div className="card-header">Tax Assessment</div>
          <div className="card-body">
            <p className="card-title">Year</p>
            <p className="card-text"><small className="text-warning">{result.taxAssessmentYear._text}</small></p>
            <p className="card-title">Price</p>
            <p className="card-text"><small className="text-warning">${result.taxAssessment._text}</small></p>
          </div>
        </div>
        <Link
          className="btn btn-raised btn-default float-right text-uppercase"
          to={{
            pathname: '/projects/edit/properties',
            state: {
              adress: `${result.address.street._text}, ${result.address.city._text},${result.address.state._text} ${result.address.zipcode._text}`,
              longitude: `${result.address.latitude._text}`,
              latitude: `${result.address.longitude._text}`
            }
          }}>
          + add property
        </Link>
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
