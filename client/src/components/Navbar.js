import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actions from "../actions";

class Navbar extends Component {
  renderButton() {
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
    }
    return <Link to="/"><h1 className="navbar-brand">REAL ESTATE MANAGER</h1></Link>
  }

  render() {

    const style = {
      nav: {
        height: "60px"
      },
      button: {
        marginRight: "10px"
      }
    }

    return (
      <nav
        style={style.nav}
        className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
      >
        <button className="btn btn-success bmd-btn-fab" type="button" id="menu-toggle" style={style.button}>
          <i className="material-icons">
            <Link to="#menu-toggle"/>
          </i>
        </button>
        {this.greetUser()}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            {this.renderButton()}
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
