import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ScrollToTop from './ScrollToTop';
import Sidebar from '../containers/Sidebar';
import Navbar from '../containers/Navbar';
import FooterNav from './FooterNav';
import Login from '../containers/Login';
import Map from '../containers/Map';
import Dashboard from '../containers/Dashboard';
import ProjectDashboard from './projects/ProjectDashboard';
import BuildingDash from './properties/PropertyDashboard';
import Landing from './Landing';
import PropertyAdd from './properties/PropertyAdd';
import BuildingProfile from './BuildingProfile';
import ProjectMap from '../containers/ProjectMap';
import NotFound from './NotFound';
import EditProperty from './EditProperty';
import ProjectCreate from './projects/ProjectCreate';
import UserSettings from './users/UserSettings';

const PlaceHolderComponent = () => <div>BUILDING PROFILE HERE</div>;
class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }
  renderPage = () => {
    switch (this.props.currentUser) {
      case null:
        return <div />;
      case false:
        return <Landing />;
      default:
        return <Redirect to="/projects" />;
    }
  };
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Navbar />
            <Layout>
              <Sidebar />
              <Switch>
                <Route
                  exact
                  path="/settings/profile"
                  component={UserSettings}
                />
                <Route
                  exact
                  path="/projects/:_id/overview"
                  component={BuildingDash}
                />
                <Route
                  exact
                  path="/projects/:_id/new"
                  component={PropertyAdd}
                />
                <Route
                  exact
                  path="/projects/:_id/mapview"
                  component={ProjectMap}
                />
                <Route
                  exact
                  path="/building/profile/:_id"
                  component={PlaceHolderComponent}
                />
                <Route exact path="/projects" component={ProjectDashboard} />
                <Route exact path="/search" component={Map} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" render={this.renderPage} />
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
function mapStateToProps({ currentUser }) {
  return { currentUser };
}
export default connect(mapStateToProps, actions)(App);
