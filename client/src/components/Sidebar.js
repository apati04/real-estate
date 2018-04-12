import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Login from "../containers/Login";
import Projects from "../containers/Projects";
import Map from "../containers/Map";
import Dashboard from "../components/Dashboard";
import Landing from './Landing';
import NotFound from './NotFound';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false
  };
  
  onCollapse = (collapsed) => {
    this.setState({collapsed});
  }

  defaultSelected() {
    const {pathname} = window.location;
    switch (pathname) {
      case '/dashboard':
        return ['1'];
      case '/projects':
        return ['2'];
      case '/map':
        return ['3'];
      default:
        return ['1'];
    }
  }

  render() {
    const style = {
      sider: {
        background: '#fff',
        minHeight: '100vh'
      }
    }

    return (
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={ style.sider }
          >
            <div className="logo"/>
            <Menu mode="inline" defaultSelectedKeys={this.defaultSelected()}>
              <Menu.Item key="1">
                <NavLink to='/home'>
                  <Icon type="user"/>
                  <span className="nav-text">Dashboard</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to='/about'>
                  <Icon type="video-camera"/>
                  <span className="nav-text">Projects</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to='/contact'>
                  <Icon type="upload"/>
                  <span className="nav-text">Map</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path ="/dashboard" component={Dashboard}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/map" component={Map}/>
            <Route exact path="/projects" component={Projects}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
    );
  }
}

export default Sidebar;
