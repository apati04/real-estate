import React, { Component } from 'react';
import { Button, Modal, Input, Form, message } from 'antd';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../../actions';
import ProjectForm from './ProjectForm';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class ProjectCollection extends Component {
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
    }
    createNewProject(vals, displayMsg);
    this.props.reset();
    this.setState({ visible: false });
  };
  render() {
    return (
      <div>
<<<<<<< HEAD
        <button className="btn btn-primary" onClick={this.showModal}>
          New Project Collection
=======
        <button className="btn btn-outline-primary" style={{ marginTop: '10px' }} onClick={this.showModal}>
          <i className="fas fa-plus-circle" /> New Project Collection
>>>>>>> btn style
        </button>
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
  connect(mapStateToProps, actions)(ProjectCollection)
);
