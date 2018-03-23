import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";

class Navbar extends Component {
  renderSignOut() {
    if(this.props.currentUser) {
      return [
        <li key="1" className="nav-item py-2">
          <a href="/api/logout" className="btn btn-raised btn-danger">SIGN OUT</a>
        </li>
      ];
    } else {
      return <div></div>
    }
  }

  greetUser() {
    if (this.props.currentUser) {
      return <h1 className="navbar-brand">WELCOME, {this.props.currentUser.userName.toUpperCase()}</h1>
    } else {
      return <Link className="navbar-brand" to="/">REAL ESTATE MANAGER</Link>
    }
  }

  renderSidebarToggle() {
    const style = {
      button: {
        marginRight: '10px'
      },
      icon: {
        fontSize: '24px'
      }
    }

    if (this.props.currentUser) {
      return (
        <button
          className="btn"
          type="button"
          style={style.button}
        >
          <i className="fas fa-list-ul" style={style.icon}/>
        </button>
      );
    } else {
      return <div></div>
    }
  }

  render() {
    const style = {
      nav: {
        height: '60px'
      }
    }

    return (
      <nav style={style.nav} className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div id="toggle-button">
          {this.renderSidebarToggle()}
        </div>
        {this.greetUser()}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            {this.renderSignOut()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ currentUser}) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Navbar);
