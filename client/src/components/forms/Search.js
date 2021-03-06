import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Search extends Component {
  formSubmit = value => {
    this.props.fetchMapData(`${value.address},${value.citystatezip}`);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field label="ADDRESS" name="address" component={FormField} />
        <Field
          label="CITY/STATE/ZIP"
          name="citystatezip"
          component={FormField}
        />
        <button className="btn btn-outline-info" type="submit">
          <i className="fas fa-search" /> SEARCH
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.address) {
    errors.address = 'Please enter the street address';
  }
  if (!values.citystatezip) {
    errors.citystatezip = 'Please enter the city, state and/or zipcode';
  }
  return errors;
}

function mapStateToProps({ propData: { data } }) {
  return {
    data
  };
}

export default reduxForm({ form: 'location', validate })(
  connect(mapStateToProps, actions)(Search)
);
