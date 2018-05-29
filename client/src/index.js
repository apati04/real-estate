import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import { Layout } from 'antd';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from './containers/Sidebar';
import Navbar from './containers/Navbar';
import FooterNav from './components/FooterNav';
import Signin from './components/auth/SigninForm';
import Signup from './components/auth/SignupForm';
import Landing from './components/Landing';
import ProjectMap from './containers/ProjectMap';
import NotFound from './components/NotFound';
import UserSettings from './components/users/UserSettings';

import ProjectDashboard from './components/projects/ProjectDashboard';

import PropertyAdd from './components/properties/PropertyAdd';
import BuildingDash from './components/properties/PropertyDashboard';
import PropertyView from './components/properties/PropertyView';
import ProjectMapView from './components/projects/ProjectMapView';
import SearchDashboard from './components/search/SearchDashboard';
import './styles/sidebar.css';
import './styles/navbar.css';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';

const Dashboard = () => <div>Dashboard</div>;
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/projects" component={ProjectDashboard} />
          <Route exact path="/search" component={SearchDashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/settings/profile" component={UserSettings} />
          <Route
            exact
            path="/projects/:_id/overview"
            component={BuildingDash}
          />
          <Route exact path="/projects/:_id/new" component={PropertyAdd} />
          <Route exact path="/projects/:_id/mapview" component={ProjectMap} />
          <Route exact path="/projects/:_id/map" component={ProjectMapView} />
          <Route
            exact
            path="/projects/:_id/post/:postId"
            component={PropertyView}
          />

          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
