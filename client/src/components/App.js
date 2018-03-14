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
  renderSidebar() {
    if (this.props.currentUser) {
      return <Sidebar/>
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path="/" component={Login}/>
          <div id="wrapper" className="toggled">
            {this.renderSidebar()}
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

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(mapStateToProps, actions)(App);
