import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import FooterNav from './FooterNav';
import Login from '../containers/Login';
import Projects from '../containers/Projects';
import Map from '../containers/Map';
import Dashboard from '../containers/Dashboard';
import Landing from './Landing';
import AddProperty from './AddProperty';
import BuildingProfile from './BuildingProfile';
import ProjectMap from '../containers/ProjectMap';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
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
                <Route
                  exact
                  path="/projects/edit"
                  component={BuildingProfile}
                />
                <Route
                  exact
                  path="/projects/add/properties"
                  component={AddProperty}
                />
                <Route component={NotFound} />
              </Switch>
            </Layout>
            <FooterNav />
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
