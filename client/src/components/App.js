import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './Sidebar';
import Navbar from '../containers/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Sidebar/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
