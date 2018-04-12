import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './Sidebar';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Sidebar/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(mapStateToProps, actions)(App);
