import React, { Component, Fragment } from "react";
import PropertyDetailCard from './PropertyDetailCard';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class PropertyDetail extends Component {
  render() {
    const { data } = this.props;
    if (data === 508) {
      return <p className='display-4 text-danger'>Details are not available for this property!</p>
    }

    const renderPropData = {
      locationData() {
        if (!data.address) {
          return (
            <Fragment>
              <p className="card-title">Address</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
              <p className="card-title">Latitude & Longitude</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Address</p>
              <p className="card-text"><small className="text-warning">{data.address.street}, {data.address.city},{data.address.state} {data.address.zipcode}</small></p>
              <p className="card-title">Latitude & Longitude</p>
              <p className="card-text"><small className="text-warning">{data.address.latitude}, {data.address.longitude}</small></p>
            </Fragment>
          );
        }
      },
      yearBuiltData() {
        if (!data.yearBuilt) {
          return (
            <Fragment>
              <p className="card-title">Year Built</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Year Built</p>
              <p className="card-text"><small className="text-warning">{data.yearBuilt}</small></p>
            </Fragment>
          );
        }
      },
      bedroomData() {
        if (!data.bedrooms) {
          return (
            <Fragment>
              <p className="card-title">Bedrooms</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Bedrooms</p>
              <p className="card-text"><small className="text-warning">{data.bedrooms}</small></p>
            </Fragment>
          );
        }
      },
      bathroomData() {
        if (!data.bathrooms) {
          return (
            <Fragment>
              <p className="card-title">Bathrooms</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Bathrooms</p>
              <p className="card-text"><small className="text-warning">{data.bathrooms}</small></p>
            </Fragment>
          );
        }
      },
      lotSizeData() {
        if (!data.lotSizeSqFt) {
          return (
            <Fragment>
              <p className="card-title">Lot Size Square FT</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Lot Size Square FT</p>
              <p className="card-text"><small className="text-warning">{data.lotSizeSqFt}</small></p>
            </Fragment>
          );
        }
      },
      sqftData() {
        if (!data.finishedSqFt) {
          return (
            <Fragment>
              <p className="card-title">Square FT</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Square FT</p>
              <p className="card-text"><small className="text-warning">{data.finishedSqFt}</small></p>
            </Fragment>
          );
        }
      },
      lastSoldData() {
        if (!data.lastSoldDate || !data.lastSoldPrice) {
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
              <p className="card-text"><small className="text-warning">{data.lastSoldDate}</small></p>
              <p className="card-title">Last Sold Price</p>
              <p className="card-text"><small className="text-warning">${data.lastSoldPrice._}</small></p>
            </Fragment>
          );
        }
      },
      taxYearData() {
        if (!data.taxAssessmentYear) {
          return (
            <Fragment>
              <p className="card-title">Year</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Year</p>
              <p className="card-text"><small className="text-warning">{data.taxAssessmentYear}</small></p>
            </Fragment>
          );
        }
      },
      taxAssessData() {
        if (!data.taxAssessment) {
          return (
            <Fragment>
              <p className="card-title">Tax</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Tax</p>
              <p className="card-text"><small className="text-warning">${data.taxAssessment}</small></p>
            </Fragment>
          );
        }
      },
      renderAddBtn() {
        return (
          <Link
            className="btn btn-outline-info text-uppercase"
            to={{
              pathname: '/projects/add/properties',
              state: {
                address: `${data.address.street}, ${data.address.city},${data.address.state} ${data.address.zipcode}`,
                longitude: `${data.address.longitude}`,
                latitude: `${data.address.latitude}`,
                zpid: `${data.zpid}`
              }
            }}>
            <i className="fas fa-plus-circle" /> add property
          </Link>
        );
      }
    }

    return <PropertyDetailCard propData = {renderPropData} />
  }
}

function mapStateToProps({ propData: { data }, imgData: { img } }) {
  return {
    data,
    img
  }
}

export default connect(mapStateToProps, actions)(PropertyDetail);
