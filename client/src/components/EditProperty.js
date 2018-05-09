import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import FormField from './forms/FormField';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../actions';

class EditProperty extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.props.fetchProperties();
  }

  componentWillUnmount() {
    this.props.resetPropData();
  }

  formSubmit = values => {
    // const { submitNewBuilding, history } = this.props;
    // submitNewBuilding(values, history);
    console.log(values);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
        <ContentLayout>
          <div id="mapbox" />
          <div className="row">
            <div className="col-md-3">
              <img
                src="http://via.placeholder.com/350x350"
                style={{ width: 350, height: 350 }}
                className="img-fluid"
                alt="placeholder"
              />
            </div>
            <div className="col-md-8">
              <form onSubmit={handleSubmit(this.formSubmit)}>
                <button
                  className="btn btn-raised btn-default float-right"
                  style={{ marginBottom: '10px' }}
                  type="submit"
                >
                  <i className="fas fa-plus-circle" /> SAVE CHANGE
                </button>
                <Field label="Address" name="address" component={FormField} />
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
                  name="rennovated"
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
          <Link
            to="/projects/edit"
            className="btn btn-raised btn-danger float-right"
          >
            <i className="fas fa-undo" /> BACK
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

function mapStateToProps({ userProperties }, ownProps) {
  const currentBuilding = userProperties.buildings.filter(building => building._id === ownProps.match.params.id);
  console.log(currentBuilding);
  return {
    userProperties,
    initialValues: {
      address: currentBuilding[0] ? currentBuilding[0].address : '',
      longitude:  currentBuilding[0] ? currentBuilding[0].longitude : '',
      latitude:  currentBuilding[0] ? currentBuilding[0].latitude : '',
      color:  currentBuilding[0] ? currentBuilding[0].color : '',
      placemark:  currentBuilding[0] ? currentBuilding[0].placemark : '',
      rennovated: currentBuilding[0] ? currentBuilding[0].rennovated : '',
      owner: currentBuilding[0] ? currentBuilding[0].owner : '',
      built: currentBuilding[0] ? currentBuilding[0].built : '',
      website: currentBuilding[0] ? currentBuilding[0].website : '',
      prevOwner: currentBuilding[0] ? currentBuilding[0].prevOwner : '',
      notes: currentBuilding[0] ? currentBuilding[0].notes : '',
      certifications: currentBuilding[0] ? currentBuilding[0].certifications : ''
    }
  }
}

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'propDetail',
    enableReinitialize: true,
    validate
  })(withRouter(EditProperty))
);
