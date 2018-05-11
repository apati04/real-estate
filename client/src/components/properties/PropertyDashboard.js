import map from 'lodash/map';
import React, { Component } from 'react';
import ContentLayout from '../layout/ContentLayout';
import { connect } from 'react-redux';
import { fetchUserProperties } from '../../actions';
import { Link } from 'react-router-dom';
import PropertyList from './PropertyList';
class PropertyDashboard extends Component {
  componentDidMount() {
    this.props.fetchUserProperties(this.props.match.params._id);
  }
  render() {
    return (
      <ContentLayout>
        <h2>Project</h2>
        <PropertyList userProperties={this.props.userProperties} />

        <div>
          <Link className="btn btn-outline-info" to="/property/add">
            <i className="fas fa-plus-circle" /> ADD PROPERTY
          </Link>
        </div>
      </ContentLayout>
    );
  }
}

function mapStateToProps({ userProperties }, ownProps) {
  return { userProperties };
}

export default connect(mapStateToProps, { fetchUserProperties })(
  PropertyDashboard
);
