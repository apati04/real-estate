import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../containers/Login";
import Projects from "../containers/Projects";
import Map from "../containers/Map";
import Dashboard from "../components/Dashboard";
import Navbar from '../containers/Navbar';
import Sidebar from './Sidebar';
import Landing from './Landing';
import NotFound from './NotFound';
import { connect } from 'react-redux';
import * as actions from '../actions';
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
          {/* <div id="wrapper" className="toggled">
            {this.renderSidebar()}
          <div id="page-content-wrapper"> */}
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path ="/dashboard" component={Dashboard}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/map" component={Map}/>
            <Route exact path="/projects" component={Projects}/>
            <Route component={NotFound}/>
          </Switch>
          {/* </div>
          </div> */}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(mapStateToProps, actions)(App);
