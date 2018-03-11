import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ field }) => {
  return (
    <li className="nav-item">
      <Link to={'/' + field.toLowerCase()} className="nav-link">
        {field.toUpperCase()}
      </Link>
    </li>
  );
};

export default SidebarItem;
