import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = WrappedComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.redirectUser();
    }
    componentDidUpdate() {
      this.redirectUser();
    }
    redirectUser() {
      if (!this.props.currentUser) {
        this.props.history.push('/');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps({ currentUser }) {
    return { auth: currentUser };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
export default requireAuth;
