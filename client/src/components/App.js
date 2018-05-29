import React, { Component } from 'react';
import ScrollToTop from './ScrollToTop';
import Navbar from '../containers/Navbar';
import Sidebar from '../containers/Sidebar';
import FooterNav from './FooterNav';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../hoc/withRoot';
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});
const App = ({ children }) => {
  return (
    <ScrollToTop>
      <Navbar />
      <Sidebar />
      {children}
      <FooterNav />
    </ScrollToTop>
  );
};
export default withRoot(withStyles(styles)(App));
