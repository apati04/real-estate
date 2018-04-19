import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
class PropertyList extends Component {
  render() {
    return <div />;
  }
}
function mapStateToProps({ userProperties }) {
  return { userProperties };
}
export default connect(mapStateToProps, { fetchSurveys })(PropertyList);
