import React, { Component } from 'react';
import { connect } from 'react-redux';
const requireAuth = WrappedComponent => {
  class Auth extends Component {
    componentDidMount() {}
    componentDidUpdate() {}
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps({})
  return connect(mapStateToProps)(WrappedComponent);
};

export default requireAuth;
