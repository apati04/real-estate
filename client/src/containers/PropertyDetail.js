import React, { Component, Fragment } from "react";
import PropertyDetailCard from './PropertyDetailCard';
import { Card, Col, Row } from 'antd';
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
      lastSoldData() {
        if (!result.lastSoldDate || !result.lastSoldPrice) {
          return (
            <Fragment>
              <p className="card-title">Last Sold Data</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
              <p className="card-title">Last Sold Price</p>
              <p className="card-text"><small className="text-danger">N/A</small></p>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <p className="card-title">Last Sold Data</p>
              <p className="card-text"><small className="text-warning">{result.lastSoldDate._text}</small></p>
              <p className="card-title">Last Sold Price</p>
              <p className="card-text"><small className="text-warning">${result.lastSoldPrice._text}</small></p>
            </Fragment>
          );
        }
      },
      bedroomData() {
        if (!result.bedrooms) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">{result.bedrooms._text}</small></p>
        }
      },
      bathroomData() {
        if (!result.bathrooms) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">{result.bathrooms._text}</small></p>
        }
      },
      lotSizeData() {
        if (!result.lotSizeSqFt) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">{result.lotSizeSqFt._text}</small></p>
        }
      },
      sqftData() {
        if (!result.finishedSqFt) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">{result.finishedSqFt._text}</small></p>
        }
      },
      yearBuiltData() {
        if (!result.yearBuilt) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">{result.yearBuilt._text}</small></p>
        }
      },
      taxYearData() {
        if (!result.taxAssessmentYear) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">{result.taxAssessmentYear._text}</small></p>
        }
      },
      taxAssessData() {
        if (!result.taxAssessment) {
          return <p className="card-text"><small className="text-warning">N/A</small></p>
        } else {
          return <p className="card-text"><small className="text-warning">${result.taxAssessment._text}</small></p>
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
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Location" bordered={true}>
              <p className="card-title">Address</p>
              <p className="card-text"><small className="text-warning">{result.address.street._text}, {result.address.city._text},{result.address.state._text} {result.address.zipcode._text}</small></p>
              <p className="card-title">Latitude & Longitude</p>
              <p className="card-text"><small className="text-warning">{result.address.latitude._text}, {result.address.longitude._text}</small></p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="About" bordered={true}>
              <p className="card-title">Year Built</p>
              {renderPropData.yearBuiltData()}
              <p className="card-title">Square FT</p>
              {renderPropData.sqftData()}
              <p className="card-title">Lot Size Square FT</p>
              {renderPropData.lotSizeData()}
              <p className="card-title">Bedrooms</p>
              {renderPropData.bedroomData()}
              <p className="card-title">Bathrooms</p>
              {renderPropData.bathroomData()}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Last Transaction" bordered={true}>
              {renderPropData.lastSoldData()}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Tax Assessment" bordered={true}>
              <p className="card-title">Year</p>
              {renderPropData.taxYearData()}
              <p className="card-title">Price</p>
              {renderPropData.taxAssessData()}
            </Card>
          </Col>
        </Row>
        <PropertyDetailCard />
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
