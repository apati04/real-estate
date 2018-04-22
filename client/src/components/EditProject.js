import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ContentLayout from './layout/ContentLayout';
import PropertyList from '../components/properties/PropertyList';

class EditProject extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <div id="mapbox" />
        <div style={{ marginTop: '20px' }}>
          <ul className="list-group list-group-flush">
            {/* map through database to display PropertyListItem */}
            <PropertyList />
          </ul>
        </div>
        <div className="float-left">
          <Link
            to="/projects/add/properties"
            className="btn btn-raised btn-default text-uppercase"
          >
            + add property
          </Link>
        </div>
        <div className="float-right">
          <Link to="/projects" className="btn btn-raised btn-danger">
            RETURN TO PROJECTS
          </Link>
          <button className="btn btn-raised btn-warning">
            DELETE SELECTED PROPERTIES
          </button>
        </div>
      </ContentLayout>
    );
  }
}

export default connect(null, actions)(EditProject);
