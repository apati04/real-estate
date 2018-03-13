import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {

  renderSidebarItems = () => {
    const items = [
      { menu: 'dashboard', icon: 'tachometer-alt' },
      { menu : 'map', icon: 'map-marker-alt' },
      { menu : 'projects', icon: 'bookmark' }
    ];

    return items.map(item => {
      return (
        <SidebarItem
          key={item.menu}
          menu={item.menu}
          icon={item.icon}
        />
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
