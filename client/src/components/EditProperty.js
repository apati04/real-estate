import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';

class EditProperty extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.props.fetchProperties();
  }

  render() {
    const { id } = this.props.match.params;
    const { buildings } = this.props.userProperties;
    const currentBuilding = buildings.filter(building => building._id === id);

    return (
      <ContentLayout>
        <h1>Edit Property</h1>
        {currentBuilding.map(building => {
          return (
            <div>
              <h3>ID: {building._id}</h3>
              <h3>Address: {building.address}</h3>
              <h3>Longitude: {building.longitude}</h3>
              <h3>Latitude: {building.latitude}</h3>
              <h3>Color: {building.color}</h3>
              <h3>Placemark: {building.placemark}</h3>
            </div>
          )
        })}
        <div className='float-right'>
          <Link to="/projects/edit" className="btn btn-raised btn-danger">
            <i className="fas fa-undo" /> BACK
          </Link>
        </div>
      </ContentLayout>
    );
  }
}

function mapStateToProps({ userProperties }) {
  return {
    userProperties
  }
}

export default connect(mapStateToProps, actions)(EditProperty);
