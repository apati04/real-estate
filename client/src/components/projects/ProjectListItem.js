import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProperties } from '../../actions';
import { Link } from 'react-router-dom';

class ProjectListItem extends Component {
  componentDidMount() {
    this.props.fetchUserProperties();
  }

  render() {
    return (
      <div>
        <li className="d-flex justify-content-between align-items-center">
          <input type="radio" style={{ marginLeft: '10px' }} name="option" />
          <h6>Project List Item with Radio Button, Edit & View Map Button 1</h6>
          <div className="d-flex">
            <Link
              to="/projects/properties"
              className="btn btn-sm btn-raised btn-primary"
            >
              <i className="fas fa-edit" /> EDIT
            </Link>
            <Link
              className="btn btn-sm btn-raised btn-default"
              style={{ marginLeft: '10px' }}
              to={{
                pathname: '/projects/map',
                state: {
                  properties: this.props.userProperties
                }
              }}
            >
              <i className="fas fa-map-marker-alt" /> VIEW MAP
            </Link>
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps({ userProperties }) {
  return {
    userProperties
  };
}

export default connect(mapStateToProps, { fetchUserProperties })(
  ProjectListItem
);
