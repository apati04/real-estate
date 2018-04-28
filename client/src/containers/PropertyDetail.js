import React, { Component, Fragment } from "react";
import PropertyDetailCard from './PropertyDetailCard';
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

    const renderPropData = {
      locationData() {
        return (
          <Fragment>
            <p className="card-title">Address</p>
            <p className="card-text"><small className="text-warning">{result.address.street._text}, {result.address.city._text},{result.address.state._text} {result.address.zipcode._text}</small></p>
            <p className="card-title">Latitude & Longitude</p>
            <p className="card-text"><small className="text-warning">{result.address.latitude._text}, {result.address.longitude._text}</small></p>
          </Fragment>
        )
      },
      yearBuiltData() {
        if (!result.yearBuilt) {
          return (
            <Fragment>
              <p className="card-title">Year Built</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Year Built</p>
              <p className="card-text"><small className="text-warning">{result.yearBuilt._text}</small></p>
            </Fragment>
          )
        }
      },
      bedroomData() {
        if (!result.bedrooms) {
          return (
            <Fragment>
              <p className="card-title">Bedrooms</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Bedrooms</p>
              <p className="card-text"><small className="text-warning">{result.bedrooms._text}</small></p>
            </Fragment>
          )
        }
      },
      bathroomData() {
        if (!result.bathrooms) {
          return (
            <Fragment>
              <p className="card-title">Bathrooms</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Bathrooms</p>
              <p className="card-text"><small className="text-warning">{result.bathrooms._text}</small></p>
            </Fragment>
          )
        }
      },
      lotSizeData() {
        if (!result.lotSizeSqFt) {
          return (
            <Fragment>
              <p className="card-title">Lot Size Square FT</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Lot Size Square FT</p>
              <p className="card-text"><small className="text-warning">{result.lotSizeSqFt._text}</small></p>
            </Fragment>
          )
        }
      },
      sqftData() {
        if (!result.finishedSqFt) {
          return (
            <Fragment>
              <p className="card-title">Square FT</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Square FT</p>
              <p className="card-text"><small className="text-warning">{result.finishedSqFt._text}</small></p>
            </Fragment>
          )
        }
      },
      lastSoldData() {
        if (!result.lastSoldDate || !result.lastSoldPrice) {
          return (
            <Fragment>
              <p className="card-title">Last Sold Date</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
              <p className="card-title">Last Sold Price</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Last Sold Date</p>
              <p className="card-text"><small className="text-warning">{result.lastSoldDate._text}</small></p>
              <p className="card-title">Last Sold Price</p>
              <p className="card-text"><small className="text-warning">${result.lastSoldPrice._text}</small></p>
            </Fragment>
          );
        }
      },
      taxYearData() {
        if (!result.taxAssessmentYear) {
          return (
            <Fragment>
              <p className="card-title">Year</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Year</p>
              <p className="card-text"><small className="text-warning">{result.taxAssessmentYear._text}</small></p>
            </Fragment>
          )
        }
      },
      taxAssessData() {
        if (!result.taxAssessment) {
          return (
            <Fragment>
              <p className="card-title">Tax</p>
              <p className="card-text"><small className="text-warning">N/A</small></p>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
              <p className="card-title">Tax</p>
              <p className="card-text"><small className="text-warning">${result.taxAssessment._text}</small></p>
            </Fragment>
          )
        }
      }
    }

    return (
      <div>
        <Link
          className="btn btn-raised btn-default text-uppercase"
          to={{
            pathname: '/projects/add/properties',
            state: {
              address: `${result.address.street._text}, ${result.address.city._text},${result.address.state._text} ${result.address.zipcode._text}`,
              longitude: `${result.address.longitude._text}`,
              latitude: `${result.address.latitude._text}`,
              zpid: `${result.zpid._text}`
            }
          }}>
          + add property
        </Link>
        <PropertyDetailCard
          propData = {renderPropData}
        />
      </div>
    );
  }
}

function mapStateToProps({ propData: { data }, imgData: { img } }) {
  return {
    data,
    img
  }
}

export default connect(mapStateToProps, actions)(PropertyDetail);
