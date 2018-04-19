import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import Login from '../containers/Login';
import Projects from '../containers/Projects';
import Map from '../containers/Map';
import Dashboard from '../containers/Dashboard';
import Landing from './Landing';
import EditProperty from './EditProperty';
import EditProject from './EditProject';
import ProjectMap from '../containers/ProjectMap';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Layout>
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/search" component={Map} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/projects/map" component={ProjectMap} />
              <Route exact path="/projects/edit" component={EditProject} />
              <Route exact path="/projects/edit/properties" component={EditProperty} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
