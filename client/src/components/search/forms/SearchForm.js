import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-antd';
import ProjectField from '../../projects/ProjectForm/ProjectField';
import { fetchMapData } from '../../../actions';
class SearchForm extends Component {
  submitForm = e => {
    const formValues = Object.values(e).join(' ');
    this.props.fetchMapData(formValues, this.props.reset);
  };
  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <Field name="street" type="text" component={ProjectField} label="Street" />
        <Field name="city" type="text" component={ProjectField} label="City" />
        <Field name="state" type="text" component={ProjectField} label="State" />
        <Field name="zip" type="text" component={ProjectField} label="Zipcode" />
        {error && <strong>{error}</strong>}
        <div>
          <button type="submit" disabled={submitting}>
            Search
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.street) {
    errors.street = 'Please enter the street';
  }
  if (!values.city) {
    errors.city = 'Please enter the city';
  }
  if (!values.state) {
    errors.state = 'Please enter the state';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'searchProperty'
})(connect(null, { fetchMapData })(SearchForm));
