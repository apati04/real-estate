import React from "react";

const ProjectListItem = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="radio" style={{marginLeft: "10px"}} name="option"/>
        <h6>Project List Item with Radio Button, Edit & View Map Button 1</h6>
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-primary">EDIT</button>
          <button className="btn btn-sm btn-outline-info" style={{marginLeft: "10px"}}>VIEW MAP</button>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="radio" style={{marginLeft: "10px"}} name="option"/>
        <h6>Project List Item with Radio Button, Edit & View Map Button 1</h6>
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-primary">EDIT</button>
          <button className="btn btn-sm btn-outline-info" style={{marginLeft: "10px"}}>VIEW MAP</button>
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="radio" style={{marginLeft: "10px"}} name="option"/>
        <h6>Project List Item with Radio Button, Edit & View Map Button 1</h6>
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-primary">EDIT</button>
          <button className="btn btn-sm btn-outline-info" style={{marginLeft: "10px"}}>VIEW MAP</button>
        </div>
      </li>
    </div>
  );
}

export default ProjectListItem;
