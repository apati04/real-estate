import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
import * as actions from "../actions";

class Projects extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.props.fetchPropertyData();
  }

  render() {
    const jsonData = this.props.propData[Object.keys(this.props.propData)[1]];

    if (!jsonData) {
      return <div>loading...</div>
    }

    const { response: { results: { result } } } = jsonData;
    console.log(result);

    return (
      <div>
        <Navbar currentUser={this.props.currentUser.userName}/>
        <ProjectList/>
      </div>
    );
  }
}

function mapStateToProps({ currentUser, propData }) {
  return {
    currentUser: currentUser.data,
    propData: propData.data
  }
}

export default connect(mapStateToProps, actions)(Projects);
