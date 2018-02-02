import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProjectList from "./ProjectList";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <ProjectList/>
      </div>
    );
  }
}

export default Home;
