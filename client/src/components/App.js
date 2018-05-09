import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ScrollToTop from './ScrollToTop';
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import FooterNav from './FooterNav';
import Login from '../containers/Login';
import Projects from '../containers/Projects';
import Map from '../containers/Map';
import Dashboard from '../containers/Dashboard';
import Landing from './Landing';
import PropertyAdd from './properties/PropertyAdd';
import BuildingProfile from './BuildingProfile';
import ProjectMap from '../containers/ProjectMap';
import NotFound from './NotFound';

// property detail is the details of a single property
const PropertyDetail = () => <div>placeholder property detail</div>;
class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }
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
                <Route path="/property/new" component={PropertyAdd} />
                <Route
                  exact
                  path="/projects/properties"
                  component={BuildingProfile}
                />
                <Route exact path="property/:_id" component={PropertyDetail} />

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

export default connect(null, actions)(App);
/**
 *              <Route
                  exact
                  path="/projects/add/properties"
                  component={AddProperty}
                />
 */
