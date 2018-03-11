import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {

  renderSidebarItems = () => {
    const items = ['home', 'about', 'map', 'projects'];
    return items.map(item => {
      return (
        <SidebarItem key={item} field={item}/>
      );
    });
  }

  render() {

    // const style = {
    //   sidebar: {
    //     position: "fixed",
    //     top: "0",
    //     bottom: "0",
    //     left: "0",
    //     zIndex: "1",
    //     padding: "0",
    //   },
    //   sticky: {
    //     position: "sticky",
    //     top: "48px",
    //     height: "calc(100vh - 48px)",
    //     paddingTop: "0.5rem",
    //     overflowX: "hidden",
    //     overflowY: "auto"
    //   }
    // }

    return (
      // <nav className='col-md-1 d-none d-md-block bg-dark navbar-expand-lg' style={style.sidebar}>
      //   <div style={style.sticky}>
      //     <ul className="nav flex-column">
      //       {this.renderSidebarItems()}
      //     </ul>
      //   </div>
      // </nav>
      <div id="wrapper">

        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                Start Bootstrap
              </a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Shortcuts</a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1>Simple Sidebar</h1>
            <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
            <a href="#menu-toggle" className="btn btn-secondary" id="menu-toggle">Toggle Menu</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
