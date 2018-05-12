import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../actions';
import map from 'lodash/map';
class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  renderList() {
    return map(this.props.projects, project => {
      return (
        <li
          style={{ borderRadius: '4px' }}
          key={project._id}
          className="d-flex justify-content-between align-items-center list-group-item m-2"
        >
          <h6>
            <strong>{project.title}</strong> -{' '}
            <span className="text-muted">{project.description}</span>
          </h6>
          <div>
            <Link
              className="btn btn-sm btn-outline-primary"
              style={{ marginRight: '10px' }}
              to={`/projects/${project._id}/overview`}
            >
              <i className="fas fa-edit" /> VIEW
            </Link>
            <Link
              to={`/projects/${project._id}/mapview`}
              className="btn btn-sm btn-outline-info"
            >
              <i className="fas fa-map-marker-alt" /> MAPS
            </Link>
            <button
              className="btn btn-sm btn-outline-danger"
              style={{ marginLeft: '10px' }}
            >
              <i className="fas fa-trash-alt" /> DELETE
            </button>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="list-group">{this.renderList()}</ul>
      </div>
    );
  }
}
function mapStateToProps({ projects }) {
  return { projects };
}
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
