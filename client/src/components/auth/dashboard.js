import React, { Component, Fragment } from 'react';
import Sidebar from '../Sidebar';
import requireAuth from '../requireAuth';

const Dashboard = ({ children }) => (
  <Fragment>
    <Sidebar />
    {children}
  </Fragment>
);

export default Dashboard;
