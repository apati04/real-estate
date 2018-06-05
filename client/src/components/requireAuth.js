import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const requireAuth = WrappedComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.redirectUser();
    }
    componentDidUpdate() {
      this.redirectUser();
    }
    redirectUser() {
      const {
        currentUser: { isFetching, auth }
      } = this.props;
      if (isFetching === null) return;
      if (!isFetching && typeof auth !== 'object') {
        console.log('kapa');
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
