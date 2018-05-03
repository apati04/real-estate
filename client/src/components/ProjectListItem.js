import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProperties } from '../actions';
import { Link } from 'react-router-dom';

class ProjectListItem extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  render() {
    console.log(this.props.userProperties.map(property => {
      return { address: property.address, long: property.longitude, lat: property.latitude };
    }));
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <input type="radio" style={{marginLeft: "10px"}} name="option"/>
          <h6>Project List Item with Radio Button, Edit & View Map Button 1</h6>
          <div className="d-flex">
            <Link to='/projects/edit' className="btn btn-sm btn-raised btn-primary">EDIT</Link>
            <Link
              className="btn btn-sm btn-raised btn-info"
              style={{ marginLeft: '10px' }}
              to={{
                pathname: '/projects/map',
                state: {
                  properties: this.props.userProperties
                }
              }}
            >
              VIEW MAP
            </Link>
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps({ userProperties }) {
  return {
    userProperties
  }
}

export default connect(mapStateToProps, { fetchProperties })(ProjectListItem);
