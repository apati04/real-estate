import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Projects from "../containers/Projects";
import Map from "../containers/Map";
import Dashboard from "../components/Dashboard";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from '../containers/Navbar';
import Sidebar from './Sidebar';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path="/" component={Login}/>
          <div id="wrapper">
            <Sidebar/>
            <div id="page-content-wrapper">
              <Route path="/map" component={Map}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/signup" component={Signup}/>
              <Route path ="/dashboard" component={Dashboard}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
