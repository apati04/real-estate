import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <ContentLayout>
        <div id="mapbox" />
        <h1>PAGE NOT FOUND</h1>
        <Link to="/projects" className="btn btn-outline-danger">
          <i className="fas fa-undo" /> BACK
        </Link>
      </ContentLayout>
    );
  }
}

export default NotFound;
