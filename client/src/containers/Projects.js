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
    console.log(jsonData);

    if (!jsonData) {
      return <div>loading...</div>
    }

    return (
      <div>
        <Navbar currentUser={this.props.currentUser.userName}/>
        <ProjectList/>
        <h1>{jsonData.response.results.result.address.street._text}</h1>
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
