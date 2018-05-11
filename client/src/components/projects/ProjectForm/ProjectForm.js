import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Button } from 'antd';
import ProjectField from './ProjectField';

const renderProjectForm = ({
  submitting,
  pristine,
  reset,
  fields,
  meta: { touched, error, submitFailed }
}) => (
  <div>
    <button
      type="button"
      className="btn btn-outline-primary"
      style={{ marginTop: '20px' }}
      onClick={() => fields.push({})}
    >
      <i className="fas fa-plus-circle" /> ADD NEW PROJECT
    </button>
    {(touched || submitFailed) && error && <span>{error}</span>}

    <ul className="list-unstyled">
      {fields.map((item, index) => (
        <li key={index}>
          <h4>New Project</h4>
          <Field
            name={`${item}.title`}
            type="text"
            component={ProjectField}
            label="Project Name"
          />
          <Field
            name={`${item}.description`}
            type="text"
            component={ProjectField}
            label="Project Description"
          />
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={submitting}
            >
              Create
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
const ProjectForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="projects" component={renderProjectForm} />
    </form>
  );
};

export default reduxForm({
  form: 'projectForm'
})(ProjectForm);
