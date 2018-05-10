import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-antd';
import { Button, Modal, Form } from 'antd';
import ProjectField from './ProjectField';
const FormItem = Form.Item;
const ProjectForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form, handleSubmit } = this.props;

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
// const renderProjectForm = ({
//   submitting,
//   pristine,
//   reset,
//   fields,
//   meta: { touched, error, submitFailed }
// }) => (
//   <div>
//     <ul className="list-unstyled">
//       {fields.map((item, index) => (
//         <li key={index}>
//           <h4>New Project</h4>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// class ProjectForm extends Component {
//   render() {
//     const {
//       submitting,
//       pristine,
//       reset,
//       fields,
//       visible,
//       onCancel,
//       onCreate,
//       handleSubmit
//     } = this.props;
//   }
// }
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
