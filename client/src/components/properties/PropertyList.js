import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PropertyList extends Component {
  renderProperties() {
    const { posts } = this.props;
    if (!Array.isArray(posts)) {
      return <h3 className='display-4 text-danger'>This project is empty</h3>;
    } else {
      return posts.map((property, index) => {
        const [street, city, statezip] = property.fullAddress.split(', ');
        return (
          <li
            key={index + property._id}
            className="d-flex justify-content-between align-items-center"
          >
            <input type="radio" style={{ marginLeft: '10px' }} name="option" />
            <h6>{`${street}, ${city}, ${statezip}`}</h6>
            <div className="d-flex">
              <Link
                to={`/projects/${this.props.projectId}/post/${property._id}`}
                className="btn btn-sm btn-outline-primary"
              >
                <i className="fas fa-edit" /> VIEW
              </Link>
            </div>
          </li>
        );
      });
    }
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h2>Building Profiles</h2>
        <ul>{this.renderProperties()}</ul>
      </div>
    );
  }
}
export default PropertyList;
