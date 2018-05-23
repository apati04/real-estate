import React, { Component } from 'react';
import ProjectField from '../../projects/ProjectForm/ProjectField';
import { Field, reduxForm } from 'redux-form';
import { Modal, Form } from 'antd';

const ProjectForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, handleSubmit } = this.props;

      return (
        <Form onSubmit={handleSubmit}>
          <Modal
            visible={visible}
            title="Create a new project"
            okText="Create"
            onCancel={onCancel}
            onOk={handleSubmit}
          >
            <Field
              label="Title"
              name="projectTitle"
              type="text"
              component={ProjectField}
            />
            <Field
              label="Description"
              name="projectDescription"
              type="text"
              component={ProjectField}
            />
          </Modal>
        </Form>
      );
    }
  }
);

function validate(values) {
  const errors = {};
  if (!values.projectTitle) {
    errors.projectTitle = 'Please enter the title'
  }
  if (!values.projectDescription) {
    errors.projectDescription = 'Please enter the description'
  }
  return errors;
}
export default reduxForm({
  validate,
  form: 'projectForm'
})(ProjectForm);
