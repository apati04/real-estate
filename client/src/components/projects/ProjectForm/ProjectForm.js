import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-antd';
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
              component={TextField}
            />
            <Field
              name="projectDescription"
              type="text"
              component={TextField}
              label="Description"
            />
          </Modal>
        </Form>
      );
    }
  }
);
const formFields = [
  { label: 'Title', name: 'projectTitle' },
  { label: 'Description', name: 'projectDescription' }
];
function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Enter a Value';
    }
  });
  return errors;
}
export default reduxForm({
  validate,
  form: 'projectForm'
})(ProjectForm);
