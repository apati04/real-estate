import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Projects from "../containers/Projects";
import Map from "../containers/Map";
import Home from "../components/Home";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
class App extends Component {

  componentDidmount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Sidebar/>
          <Route exact path="/" component={Login}/>
          <div className='row'>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Route path="/map" component={Map}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/signup" component={Signup}/>
              <Route path ="/home" component={Home}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
