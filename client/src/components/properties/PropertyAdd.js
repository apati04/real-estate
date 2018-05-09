import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import FormField from './forms/FormField';
import { Card } from 'antd';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import ContentLayout from '../layout/ContentLayout';
import FormField from '../forms/FormField';

class PropertyAdd extends Component {
  state = { file: null };
  componentDidMount() {
    if (this.props.location.state) {
      this.props.fetchImgData(this.props.location.state.zpid);
    }
    this.props.fetchCurrentUserData();
  }

  componentWillUnmount() {
    this.props.resetPropData();
  }

  formSubmit = values => {
    const { submitNewBuilding, history } = this.props;
    submitNewBuilding(values, this.state.file, history);
  };

  renderPropertyImg() {
    const data = this.props.img[Object.keys(this.props.img)[1]];
    if (!data) {
      return (
        <Card loading style={{ width: 350, height: 350, border: 'none' }} />
      );
    } else if (!data.response) {
      return (
        <img
          src="http://via.placeholder.com/350x350"
          style={{ width: 350, height: 350 }}
          className="img-fluid"
          alt="placeholder"
        />
      );
    } else {
      const {
        response: {
          images: { image: url }
        }
      } = data;
      return (
        <img
          src={url.url._text}
          style={{ width: 350, height: 350 }}
          className="img-fluid"
          alt="placeholder"
        />
      );
    }
  }
  onFileUpload = e => {
    this.setState({ file: e.target.files[0] });
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <ContentLayout>
        <div id="mapbox" />
        <div className="row">
          <div className="col col-md-4">{this.renderPropertyImg()}</div>
          <div className="col col-md-8">
            <form onSubmit={handleSubmit(this.formSubmit)}>
              <button
                className="btn btn-raised btn-default float-right"
                style={{ marginBottom: '10px' }}
                type="submit"
              >
                <i className="fas fa-plus-circle" /> SAVE PROPERTY
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
                <div>
                  <h5>Upload an Image</h5>
                  <input
                    onChange={this.onFileUpload}
                    type="file"
                    accept="image/*"
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

function mapStateToProps({ imgData: img }, ownProps) {
  if (ownProps.location.state) {
    const { address, longitude, latitude } = ownProps.location.state;
    return {
      img: img.img,
      initialValues: {
        address: `${address}`,
        longitude: `${longitude}`,
        latitude: `${latitude}`
      }
    };
  } else {
    return {
      img: img.img,
      initialValues: {
        address: '',
        longitude: '',
        latitude: ''
      }
    };
  }
}

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'propDetail',
    enableReinitialize: true,
    validate
  })(withRouter(PropertyAdd))
);
