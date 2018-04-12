import { connect } from 'react-redux';
import * as actions from "../actions";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  renderSignOut() {
    if(this.props.currentUser) {
      return <Button type='primary' href='/api/logout'>SIGN OUT</Button>
    } else {
      return <div></div>
    }
  }

  greetUser() {
    const style = {
      font: {
        color: 'white'
      }
    }

    if (this.props.currentUser) {
      return <Menu.Item><Link to='/' style={ style.font }>WELCOME, {this.props.currentUser.userName.toUpperCase()}</Link></Menu.Item>
    } else {
      return <Menu.Item><Link to='/' style={ style.font }>REAL ESTATE APP</Link></Menu.Item>
    }
  }

  render() {
    const style = {
         menu: {
           lineHeight: '64px'
         },
         button: {
           position: 'absolute',
           top: '15px',
           right: '15px'
         }
       }

    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={ style.menu }
          >
            {this.greetUser()}
            <Menu.Item style={ style.button }>
              {this.renderSignOut()}
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

function mapStateToProps({ currentUser}) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Navbar);
