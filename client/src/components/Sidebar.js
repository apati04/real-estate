import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  defaultSelected() {
    const { pathname } = window.location;
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
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={ this.props.currentUser ? { background: '#fff', minHeight: '100vh '} : { display: 'none' } }
      >
        <div className="logo"/>
        <Menu mode="inline" defaultSelectedKeys={this.defaultSelected()}>
          <Menu.Item key="1">
            <NavLink to='/dashboard'>
              <Icon type="user"/>
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to='/projects'>
              <Icon type="video-camera"/>
              <span className="nav-text">Projects</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to='/map'>
              <Icon type="upload"/>
              <span className="nav-text">Map</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(mapStateToProps, null)(Sidebar);
