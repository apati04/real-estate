import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
import * as actions from "../actions";

class Projects extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.props.currentUser.userName}/>
        <ProjectList/>
      </div>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return {
    currentUser: currentUser.data
  }
}

export default connect(mapStateToProps, actions)(Projects);
