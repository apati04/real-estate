import React from 'react';

const requireAuth = (WrappedComponent) => {
  class ComposedComponent extends Component {

  }
  return (
    <WrappedComponent {...this.props} />
  );
};

export default requireAuth;