import React, { Component } from 'react';
import { Button, message } from 'antd';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import ContentLayout from '../layout/ContentLayout';
import FormField from '../forms/FormField';

class PropertyAdd extends Component {
  state = { file: null, loading: false };
  componentDidMount() {
    if (this.props.location.state) {
      this.props.fetchImgData(this.props.location.state.zpid);
    }
    this.props.fetchCurrentUserData();
  }

  formSubmit = values => {
    this.setState({ loading: true });
    const { submitNewBuilding, history } = this.props;
    const formValues = {
      ...values,
      _project: this.props.match.params._id
    };
    const displayMsg = () => {
      message.success('Property has been successfully added!', 2);
      this.setState({ loading: false });
    };
    submitNewBuilding(
      formValues,
      this.state.file,
      { shouldRedirect: true, history },
      displayMsg
    );
  };

  onFileUpload = e => {
    this.setState({ file: e.target.files[0] });
  };

  renderSaveBtn() {
    if (this.state.loading) {
      return (
        <Button loading className="float-right">
          SAVING PROPERTY
        </Button>
      );
    } else {
      return (
        <button
          className="btn btn-outline-info float-right"
          style={{ marginBottom: '10px' }}
          type="submit"
        >
          <i className="fas fa-plus-circle" /> SAVE PROPERTY
        </button>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <ContentLayout>
        <div id="mapbox" />
        <div className="row">
          <div className="col-md-3">
            <img src='http://via.placeholder.com/350x350' className='img-fluid' alt='property'/>
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit(this.formSubmit)}>
              <Field label="Full Address" name="fullAddress" component={FormField} />
              {/* <div className='row'>
                <div className='col-md-6'>
                  <Field label="City" name="city" component={FormField} />
                </div>
                <div className='col-md-6'>
                  <Field label="State & Zipcode" name="statezip" component={FormField} />
                </div>
              </div> */}
              <div className="row">
                <div className="col-md-6">
                  <Field label="Latitude" name="latitude" component={FormField} />
                  <h5>Upload an Image</h5>
                  <input
                    onChange={this.onFileUpload}
                    type="file"
                    accept="image/jpeg"
                  />
                </div>
                <div className="col-md-6">
                  <Field label="Longitude" name="longitude" component={FormField} />
                </div>
              </div>
              <button
                className="btn btn-outline-danger float-right"
                style={{ marginLeft: '30px ' }}
                onClick={() => this.props.history.goBack()}
              >
                <i className="fas fa-undo" /> BACK
              </button>
              {this.renderSaveBtn()}
            </form>
          </div>
        </div>
        {/* <div style={{ marginTop: '30px' }}>
          <h1 className="display-4">Building Profile</h1>
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
        </div> */}
      </ContentLayout>
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
  if (!values.statezip) {
    errors.statezip = 'Please enter the state and zipcode';
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

// function mapStateToProps({ imgData: img }, ownProps) {
//   if (ownProps.location.state) {
//     const { address, longitude, latitude } = ownProps.location.state;
//     return {
//       img: img.img,
//       initialValues: {
//         address: `${address}`,
//         longitude: `${longitude}`,
//         latitude: `${latitude}`
//       }
//     };
//   } else {
//     return {
//       img: img.img,
//       initialValues: {
//         address: '',
//         longitude: '',
//         latitude: ''
//       }
//     };
//   }
// }

export default reduxForm({
  form: 'propDetail',
  validate
})(withRouter(connect(null, actions)(PropertyAdd)));
