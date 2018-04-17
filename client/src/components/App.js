import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from './Sidebar';
import Navbar from '../containers/Navbar';
import Login from "../containers/Login";
import Projects from "../containers/Projects";
import Map from "../containers/Map";
import Dashboard from "../components/Dashboard";
import Landing from './Landing';
import NewProject from './NewProject';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Navbar/>
          <Layout>
            <Sidebar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path ="/dashboard" component={Dashboard}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/map" component={Map}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/project/new" component={NewProject}/>
              <Route component={NotFound}/>
            </Switch>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
