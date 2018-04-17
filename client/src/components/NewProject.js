import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import FormField from './forms/FormField';
import { Field, reduxForm } from "redux-form"
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewProject extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  formSubmit = value => {
    console.log(value);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ContentLayout>
        <form onSubmit={handleSubmit(this.formSubmit)}>
          <Field
            label="ADDRESS"
            name="address"
            component={FormField}
          />
          <div className='row'>
            <div className='col-md-6'>
              <Field
                label="Longitude"
                name="longitude"
                component={FormField}
              />
              <Field
                label="Latitude"
                name="latitude"
                component={FormField}
              />
            </div>
            <div className='col-md-6'>
              <Field
                label="Color RGB"
                name="color"
                component={FormField}
              />
              <Field
                label="Placemark Height"
                name="placemark"
                component={FormField}
              />
            </div>
          </div>
          <button className="btn btn-raised btn-info" type="submit">SAVE PROPERTY</button>
        </form>
      </ContentLayout>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.address) {
    errors.address = 'Please enter the address';
  }
  return errors;
}

export default reduxForm({ form: 'propDetail', validate })(connect(null, actions)(NewProject));
