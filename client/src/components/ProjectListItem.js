import React from "react";
import { Link } from 'react-router-dom';

const ProjectListItem = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="radio" style={{marginLeft: "10px"}} name="option"/>
        <h6>Project List Item with Radio Button, Edit & View Map Button 1</h6>
        <div className="d-flex">
          <Link to='/projects/edit' className="btn btn-sm btn-raised btn-primary">EDIT</Link>
          <Link to='/projects/map' className="btn btn-sm btn-raised btn-info" style={{marginLeft: "10px"}}>VIEW MAP</Link>
        </div>
      </li>
    </div>
  );
}

export default ProjectListItem;
