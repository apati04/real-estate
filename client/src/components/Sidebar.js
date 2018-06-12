import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  defaultSelected() {
    const { pathname } = this.props.location;
    if (pathname.includes('projects')) {
      return ['3'];
    } else if (pathname === '/dashboard') {
      return ['1'];
    } else if (pathname === '/search') {
      return ['4'];
    } else if (pathname === '/settings/profile') {
      return ['2'];
    } else {
      return ['1'];
    }
  }

  render() {
    const {
      currentUser: { isFetching, auth }
    } = this.props;
    console.log(typeof auth);
    return (
      <Fragment>
        {!isFetching && typeof auth !== 'string' ? (
          <Sider
            collapsible
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ background: '#fff', minHeight: '100vh ' }}
          >
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={this.defaultSelected()}>
              <Menu.Item key="1">
                <NavLink to="/dashboard">
                  <Icon type="dashboard" />
                  <span className="nav-text">Dashboard</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/settings/profile">
                  <Icon type="user" />
                  <span className="nav-text">User Profile</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/projects">
                  <Icon type="database" />
                  <span className="nav-text">Projects</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/search">
                  <Icon type="environment-o" />
                  <span className="nav-text">Property Search</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
