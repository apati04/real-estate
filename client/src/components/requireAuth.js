import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const requireAuth = WrappedComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      console.log('didmoutn');
      this.redirectUser();
    }
    componentDidUpdate() {
      console.log('didupdate');
      this.redirectUser();
    }
    redirectUser() {
      const {
        currentUser: { isFetching, auth }
      } = this.props;
      if (typeof auth === 'string') {
        this.props.history.push('/');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps({ currentUser }) {
    return { currentUser };
  }
  return withRouter(connect(mapStateToProps)(ComposedComponent));
};
export default requireAuth;
