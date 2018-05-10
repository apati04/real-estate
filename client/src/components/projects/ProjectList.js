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
    const { projects } = this.props;
    return map(projects, project => (
      <li
        style={{ margin: '10px' }}
        key={project._id}
        className="d-flex justify-content-between align-items-center"
      >
        <h6>
          <strong>{project.title}</strong> - {project.description}
        </h6>
        <div>
          <p>Buildings: {project.posts.length || 0}</p>
          <Link
            className="btn btn-sm btn-raised btn-primary"
            to={`/projects/${project._id}`}
          >
            <i className="fas fa-edit" /> VIEW
          </Link>
          <Link
            to={`/projects/${project._id}`}
            className="btn btn-sm btn-raised btn-warning"
          >
            <i className="fas fa-map-marker-alt" /> MAPS
          </Link>
        </div>
      </li>
    ));
  }
  render() {
    return <ul>{this.renderList()}</ul>;
  }
}
function mapStateToProps({ projects }) {
  return { projects };
}
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
