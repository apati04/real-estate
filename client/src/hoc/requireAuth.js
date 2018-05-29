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

  function mapStateToProps({ auth }) {
    return {
      auth: auth.authenticated
    };
  }

  return connect(mapStateToProps)(Auth);
};

export default requireAuth;
