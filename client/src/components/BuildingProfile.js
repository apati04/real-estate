import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ContentLayout from './layout/ContentLayout';
import PropertyList from '../components/properties/PropertyList';

class BuildingProfile extends Component {
  state = { propertyId: null };
  componentDidMount() {
    this.props.fetchCurrentUserData();
    console.log('building profile: ', this.props.currentUser);
  }
  handleDeleteClick = () => {
    const bId = this.state.propertyId;
    this.props.deleteSelectedProperty(bId, this.props.history);
  };
  deleteProperty = propertyId => {
    this.setState({ propertyId });
  };
  render() {
    console.log(this.state);
    console.log(this.props.userProperties);
    return (
      <ContentLayout>
        <div id="mapbox" />
        <div style={{ marginTop: '20px' }}>
          <ul className="list-group list-group-flush">
            {/* map through database to display PropertyListItem */}
            <PropertyList deleteProperty={this.deleteProperty} />
          </ul>
        </div>
        <div className="float-left">
          <Link
            to="/projects/add/properties"
            className="btn btn-outline-info text-uppercase"
          >
            <i className="fas fa-plus-circle" /> add property
          </Link>
        </div>
        <div className="float-right">
          <Link to="/projects" className="btn btn-outline-danger">
            <i className="fas fa-undo" /> RETURN TO PROJECTS
          </Link>
          <button
            onClick={this.handleDeleteClick}
            className="btn btn-outline-warning"
          >
            <i className="fas fa-trash-alt" /> DELETE SELECTED PROPERTIES
          </button>
        </div>
      </ContentLayout>
    );
  }
}

function mapStateToProps({ currentUser, userProperties }) {
  return { currentUser, userProperties };
}
export default connect(mapStateToProps, actions)(BuildingProfile);
