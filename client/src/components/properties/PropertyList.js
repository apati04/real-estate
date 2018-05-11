import map from 'lodash/map';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PropertyList extends Component {
  renderProperties() {
    const { userProperties, deleteProperty } = this.props;
    return map(userProperties, property => {
      return (
        <div key={property._id}>
          <li className="d-flex justify-content-between align-items-center">
            <input type="radio" style={{ marginLeft: '10px' }} name="option" />
            <h6>{property.address}</h6>
            <div className="d-flex">
              <Link
                to={`/projects/edit/properties/${item._id}`}
                className="btn btn-sm btn-outline-primary"
              >
                <i className="fas fa-edit" /> EDIT
              </Link>
            </div>
          </li>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Building Profiles</h2>
        {this.renderProperties()}
      </div>
    );
  }
}
export default PropertyList;
