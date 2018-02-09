import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Projects from "../containers/Projects";
import Map from "../containers/Map";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';
class App extends Component {

  componentDidmount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path="/" component={Login}/>
          <Route path="/map" component={Map}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/signup" component={Signup}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
