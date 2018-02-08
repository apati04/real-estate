import React, { Component } from "react";
import { connect } from 'react-redux';
class Navbar extends Component {

  renderButton() {
    if(this.props.currentUser) {
      return [
        <li key="1" className="nav-item py-2">
          <a href="/api/logout" className="btn btn-danger">Sign Out</a>
        </li>
      ]
    } else {
      return <div></div>
    }
  }

  greetUser() {
    if (this.props.currentUser) {
      return <h1 className="navbar-brand">Welcome, {this.props.currentUser.userName}</h1>
    }
    return <h1 className="navbar-brand">Real Estate Manager</h1>
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        { this.greetUser() }
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
export default connect(mapStateToProps)(Navbar);
