import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ScrollToTop from './ScrollToTop';
import FooterNav from './FooterNav';
import Login from '../containers/Login';
import Landing from './Landing';
import ProjectMap from '../containers/ProjectMap';
import NotFound from './NotFound';
import UserSettings from './users/UserSettings';
import ProjectDashboard from './projects/ProjectDashboard';
import Navbar from './Navbar';
import PropertyAdd from './properties/PropertyAdd';
import BuildingDash from './properties/PropertyDashboard';
import PropertyView from './properties/PropertyView';
import ProjectMapView from './projects/ProjectMapView';
import SearchDashboard from './search/SearchDashboard';
import MainDashboard from './auth/dashboard';
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <Fragment>
        {currentUser.isFetching ? null : (
          <BrowserRouter>
            <ScrollToTop>
              <Layout>
                <Navbar currentUser={currentUser} />
                <Layout>
                  <MainDashboard>
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
                        path="/projects/:_id/map"
                        component={ProjectMapView}
                      />
                      <Route
                        exact
                        path="/projects/:_id/post/:postId"
                        component={PropertyView}
                      />
                      <Route
                        exact
                        path="/projects"
                        component={ProjectDashboard}
                      />
                      <Route exact path="/search" component={SearchDashboard} />

                      <Route exact path="/login" component={Login} />
                      <Route
                        exact
                        path="/"
                        render={() => {
                          const { isFetching, auth } = currentUser;
                          if (isFetching) {
                            return null;
                          } else if (typeof auth === 'string') {
                            return <Landing />;
                          } else {
                            return <Redirect to="/dashboard" />;
                          }
                        }}
                      />
                      <Route component={NotFound} />
                    </Switch>
                  </MainDashboard>
                </Layout>
                <FooterNav />
              </Layout>
            </ScrollToTop>
          </BrowserRouter>
        )}
      </Fragment>
    );
  }
}
function mapStateToProps({ currentUser }) {
  return { currentUser };
}
export default connect(
  mapStateToProps,
  actions
)(App);
