import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProperties } from '../../actions';
import PropertyList from './PropertyList';
class PropertyDashboard extends Component {
  componentDidMount() {
    this.props.fetchUserProperties(this.props.match.params._id);
  }
  render() {
    return (
      <div>
        <h2>Project</h2>
        <PropertyList userProperties={this.props.userProperties} />
      </div>
    );
  }
}

function mapStateToProps({ userProperties }, ownProps) {
  return { userProperties };
}

export default connect(mapStateToProps, { fetchUserProperties })(
  PropertyDashboard
);
