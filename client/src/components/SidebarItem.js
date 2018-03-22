import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ menu, icon }) => {
  const style = {
    icon: {
      marginRight: '10px'
    },
    navLink: {
      color: 'white',
      backgroundColor: '#26b2a4'
    }
  }

  return (
    <li className="nav-item">
      <NavLink to={'/' + menu.toLowerCase()} className="nav-link" activeStyle={style.navLink}>
        <i className={`fas fa-${icon}`} style={style.icon}/> {menu.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
