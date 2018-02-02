import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Home from "../containers/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/" component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
