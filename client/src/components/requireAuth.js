import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = WrappedComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.redirectUser();
    }
    // componentDidUpdate() {
    //   this.redirectUser();
    // }
    redirectUser() {
      return;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps({ currentUser }) {
    console.log(currentUser, ' :hoc');
    return { auth: currentUser.auth };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
export default requireAuth;
