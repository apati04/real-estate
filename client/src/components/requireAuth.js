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
      const {
        currentUser: { isFetching, auth }
      } = this.props;
      if (!isFetching && typeof auth === 'string') {
        console.log(this.props);
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  function mapStateToProps({ currentUser }) {
    return { currentUser };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
export default requireAuth;
