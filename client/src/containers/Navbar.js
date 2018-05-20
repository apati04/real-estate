import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, Card, Icon } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  renderSignOut() {
    if (this.props.currentUser) {
      const firstName = this.props.currentUser.userName.split(' ')[0];
      const menu = (
        <Menu>
          <Menu.Item className="m-0 p-0" key="1">
            <Card
              title={`Hello, ${firstName.toUpperCase()}`}
              bordered={false}
              style={{ width: '100%' }}
            >
              <Link to="/settings/profile">
                <p>
                  <Icon type="setting" /> Settings{' '}
                </p>
              </Link>
              <a href="/api/logout" className="text-danger">
                <i className="fas fa-power-off" /> Log Out
              </a>
            </Card>
          </Menu.Item>
        </Menu>
      );
      return (
        <div className="align-middle">
          <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
            <Avatar size="large" style={{ backgroundColor: '#26b2a4' }}>
              {firstName.toUpperCase()}
            </Avatar>
          </Dropdown>
        </div>
      );
    } else {
      return <div />;
    }
  }

  greetUser() {
    const style = {
      font: {
        color: 'white'
      }
    };

    if (this.props.currentUser) {
      return (
        <Menu.Item>
          WELCOME, {this.props.currentUser.userName.toUpperCase()}
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item>
          <Link to="/" style={style.font}>
            REAL ESTATE APP
          </Link>
        </Menu.Item>
      );
    }
  }

  render() {
    const style = {
      menu: {
        lineHeight: '64px'
      }
    };

    return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={style.menu}>
          {this.greetUser()}
          <Menu.Item className="float-right">{this.renderSignOut()}</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Navbar);
