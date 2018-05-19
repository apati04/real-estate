import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, deleteProject } from '../../actions';
import { Modal, message } from 'antd';
import map from 'lodash/map';

class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  showDeleteModal = (project, deleteProject) => {
    Modal.confirm({
      title: `Are you sure?`,
      content: 'This operation cannot be undone',
      okText: 'Yes, delete this project',
      onOk() {
        const msg = () => {
          const title = project.title;
          message.success(
            <span>
              Project <strong>{title}</strong> has been deleted
            </span>
          );
        };
        deleteProject(project._id, msg);
      },
      onCancel() {
        return;
      }
    });
  };
  renderList() {
    const { deleteProject } = this.props;
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
            <Link
              to={`/projects/${project._id}/map`}
              className="btn btn-sm btn-outline-info"
            >
              <i className="fas fa-map-marker-alt" /> MAPS Beta v2
            </Link>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => this.showDeleteModal(project, deleteProject)}
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
export default connect(mapStateToProps, { fetchProjects, deleteProject })(
  ProjectList
);
