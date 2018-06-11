import React, { Component } from "react";
import ProjectField from "../../projects/ProjectForm/ProjectField";
import { Field, reduxForm } from "redux-form";
import { Modal, Form } from "antd";

const ProjectForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, handleSubmit } = this.props;

      return (
        <Modal
          visible={visible}
          title="Create a new project"
          okText="Create"
          onCancel={onCancel}
          onOk={handleSubmit}
        >
          <Form onSubmit={handleSubmit}>
            <Field label="Title" name="projectTitle" component={ProjectField} />
            <Field
              label="Description"
              name="projectDescription"
              component={ProjectField}
            />
          </Form>
        </Modal>
      );
    }
  }
);

function validate(values) {
  console.log("projectform: ", values);
  let errors = {};
  if (!values.projectTitle) {
    errors.projectTitle = "Please enter the title";
  }
  if (!values.projectDescription) {
    errors.projectDescription = "Please enter the description";
  }
  return errors;
}
export default reduxForm({
  form: "projectForm",
  validate
})(ProjectForm);
