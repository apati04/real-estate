import map from 'lodash/map';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PropertyList extends Component {
  renderProperties() {
    const { posts, deleteProperty } = this.props;
    return posts.map((property, index) => {
      return (
        <li
          key={index + property._id}
          className="d-flex justify-content-between align-items-center"
        >
          <input type="radio" style={{ marginLeft: '10px' }} name="option" />
          <h6>{property.address}</h6>
          <div className="d-flex">
            <Link
              to={`/building/profile/${property._id}`}
              className="btn btn-sm btn-outline-primary"
            >
              <i className="fas fa-edit" /> VIEW
            </Link>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Building Profiles</h2>
        <ul>{this.renderProperties()}</ul>
      </div>
    );
  }
}
export default PropertyList;
