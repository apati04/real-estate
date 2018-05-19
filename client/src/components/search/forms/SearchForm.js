import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-antd';
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
        <Field name="street" type="text" component={TextField} label="Street" />
        <Field name="city" type="text" component={TextField} label="City" />
        <Field name="state" type="text" component={TextField} label="State" />
        <Field name="zip" type="text" component={TextField} label="Zipcode" />
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

export default reduxForm({
  form: 'searchProperty'
})(connect(null, { fetchMapData })(SearchForm));
