import React, { Component } from "react";
import Navbar from "../components/Navbar";
import CurrentProjects from "./CurrentProjects";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CurrentProjects/>
      </div>
    );
  }
}

export default Home;
