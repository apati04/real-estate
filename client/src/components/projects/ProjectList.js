import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, deleteProject } from '../../actions';
import { Button, Modal, message } from 'antd';
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
              style={{ marginRight: '10px' }}
              to={`/projects/${project._id}/overview`}
            >
              <Button
                shape='circle'
                icon='profile'
                size='large'
                className='btn-outline-primary'
              />
            </Link>
            <Link
              to={`/projects/${project._id}/map`}
            >
              <Button
                shape='circle'
                icon='compass'
                size='large'
                className='btn-outline-info'
              />
            </Link>
            <Button
              shape='circle'
              icon='delete'
              size='large'
              className='btn-outline-danger'
              style={{ marginLeft: '10px' }}
              onClick={() => this.showDeleteModal(project, deleteProject)}
            />
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
