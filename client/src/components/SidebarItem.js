import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ menu, icon }) => {
  const style = {
    marginRight: '10px'
  }

  return (
    <li className="nav-item">
      <Link to={'/' + menu.toLowerCase()} className="nav-link">
        <i className={`fas fa-${icon}`} style={style}/> {menu.toUpperCase()}
      </Link>
    </li>
  );
};

export default SidebarItem;
