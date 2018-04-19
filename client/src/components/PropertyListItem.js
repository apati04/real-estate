import React from "react";
import { Link } from 'react-router-dom';

const PropertyListItem = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="radio" style={{marginLeft: "10px"}} name="option"/>
        <h6>Property Name 1</h6>
        <div className="d-flex">
          <Link to='/projects/edit/properties' className="btn btn-sm btn-raised btn-primary">EDIT</Link>
        </div>
      </li>
      <hr/>
    </div>
  );
}

export default PropertyListItem;
