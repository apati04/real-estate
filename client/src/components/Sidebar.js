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
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {this.renderSidebarItems()}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
