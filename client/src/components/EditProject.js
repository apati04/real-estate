import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ContentLayout from './layout/ContentLayout';
import PropertyListItem from "./PropertyListItem";

class EditProject extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <div id='map' />
        <div style={{ marginTop: "20px" }}>
          <ul className="list-group list-group-flush">
            {/* map through database to display PropertyListItem */}
            <PropertyListItem/>
          </ul>
        </div>
        <Link to="/projects" className="btn btn-raised btn-danger float-right">
          BACK
        </Link>
      </ContentLayout>
    );
  }
}

export default connect(null, actions)(EditProject);
