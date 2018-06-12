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
            <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <NavLink to="/dashboard">
                  <i className="fas fa-tachometer-alt" />{' '}
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
                  <i className="fas fa-paperclip" />{' '}
                  <span className="nav-text">Projects</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/search">
                  <i className="fas fa-map-marker-alt" />{' '}
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
