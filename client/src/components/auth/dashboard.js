import React, { Component, Fragment } from 'react';
import Sidebar from '../Sidebar';
import requireAuth from '../requireAuth';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Dashboard;
