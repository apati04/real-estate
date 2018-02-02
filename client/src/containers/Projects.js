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
        <Navbar/>
        <ProjectList/>
      </div>
    );
  }
}

function mapStateToProps({ userData }) {
  return {
    userData
  }
}

export default connect(mapStateToProps, actions)(Projects);
