import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import { Link } from 'react-router-dom';
import { fetchCurrentUserData } from '../actions';
import { connect } from 'react-redux';

class NotFound extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <div id='mapbox'/>
        <h1>PAGE NOT FOUND</h1>
        <Link to="/projects" className="btn btn-raised btn-danger">
          <i className="fas fa-undo" /> BACK
        </Link>
      </ContentLayout>
    );
  }
}

export default connect(null, { fetchCurrentUserData })(NotFound);
