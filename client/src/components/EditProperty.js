import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import FormField from './forms/FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../actions';

class EditProperty extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  formSubmit = values => {
    const { submitNewBuilding, history } = this.props;
    submitNewBuilding(values, history);
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.location.state);
    return (
      <ContentLayout>
        <div id="mapbox" />
        <div className="row">
          <div className="col-md-3">
            <img
              src="http://via.placeholder.com/350x350"
              className="img-fluid"
              alt="placeholder"
            />
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit(this.formSubmit)}>
              <button
                className="btn btn-raised btn-info float-right"
                style={{ marginBottom: '10px' }}
                type="submit"
              >
                SAVE PROPERTY
              </button>
              <Field
                label="Address"
                name="address"
                component={FormField}
              />
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
                  <Field label="Color RGB" name="color" component={FormField} />
                  <Field
                    label="Placemark Height"
                    name="placemark"
                    component={FormField}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
          <h1 className="display-3">Building Profile</h1>
          <hr />
          <div className="row">
            <div className="col-md-5">
              <Field
                label="Rennovated"
                name="renovated"
                component={FormField}
              />
              <Field label="Owner" name="owner" component={FormField} />
              <Field label="Built" name="built" component={FormField} />
              <Field label="Website" name="website" component={FormField} />
            </div>
            <div className="col-md-5 offset-md-1">
              <Field
                label="Previous Owner"
                name="prevOwner"
                component={FormField}
              />
              <Field label="Notes" name="notes" component={FormField} />
              <Field
                label="Commercial Real Estate Certifications"
                name="certifications"
                component={FormField}
              />
            </div>
          </div>
        </div>
        <Link to="/projects/edit" className="btn btn-raised btn-danger float-right">
          BACK
        </Link>
      </ContentLayout>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.address) {
    errors.address = 'Please enter the address';
  }
  if (!values.latitude) {
    errors.latitude = 'Please enter the latitude';
  }
  if (!values.longitude) {
    errors.longitude = 'Please enter the longitude';
  }
  if (!values.color) {
    errors.color = 'Please enter the color in RGB';
  }
  if (!values.placemark) {
    errors.placemark = 'Please enter the placemark height in px';
  }
  return errors;
}

function mapStateToProps({ propData: { data }}) {
  return {
    data
  }
}

export default reduxForm({
  form: 'propDetail',
  enableReinitialize: true,
  // initialValues: { address: '123'}
  validate })(connect(mapStateToProps, actions)(withRouter(EditProperty))
);
