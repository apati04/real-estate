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

    const style = {
      sidebar: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "-1",
        padding: "0",
        boxShadow: "inset -1px 0 0 rgba(0, 0, 0, .1)"
      },
      sticky: {
        position: "sticky",
        top: "48px",
        height: "calc(100vh - 48px)",
        paddingTop: "0.5rem",
        overflowX: "hidden",
        overflowY: "auto"
      }
    }

    return (
      <nav className='col-md-2 d-none d-md-block bg-light sidebar' style={style.sidebar}>
        <div style={style.sticky}>
          <ul className="nav flex-column">
            {this.renderSidebarItems()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
