import React, { Component } from 'react';
import { Button, message } from 'antd';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../../actions';
import ProjectForm from './ProjectForm';

class ProjectCreate extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const vals = this.props.projectForm.values;
    const { createNewProject } = this.props;
    const displayMsg = () => {
      message.success('Project has been successfully added!', 2);
    };
    createNewProject(vals, displayMsg);
    this.props.reset();
    this.setState({ visible: false });
  };
  render() {
    return (
      <div>
        <Button
          shape='circle'
          icon='plus'
          size='large'
          className='btn-outline-info'
          style={{ marginTop: '10px', marginLeft: '10px' }}
          onClick={this.showModal}
        />
        <ProjectForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onSubmit={this.handleCreate}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { projectForm: state.form.projectForm };
}
export default reduxForm({ form: 'projectForm' })(
  connect(mapStateToProps, actions)(ProjectCreate)
);
