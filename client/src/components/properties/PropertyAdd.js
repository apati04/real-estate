import React, { Component } from "react";
import { Button, message } from "antd";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import ContentLayout from "../layout/ContentLayout";
import FormField from "../forms/FormField";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class PropertyAdd extends Component {
  state = { file: null, loading: false };
  componentDidMount() {
    if (this.props.location.state) {
      this.props.fetchImgData(this.props.location.state.zpid);
    }
  }

  formSubmit = values => {
    console.log("values: ", values);
    const { mapData } = this.props;
    const address = values.street;
    const citystatezip = values.city + values.state + values.zipcode;
    this.props.validateLocation(address, citystatezip);
    return sleep(1000).then(() => {
      throw new SubmissionError({
        street: " ",
        zipcode: " ",
        city: " ",
        state: " ",
        _error: "Could not find location, please correct"
      });
    });

    // this.setState({ loading: true });
    // if (resp.payload.error)
    //   throw new SubmissionError({
    //     address: "Address does not exit",
    //     _error: "submit failed!"
    //   });
    // const { submitNewBuilding, history } = this.props;
    // const formValues = {
    //   ...values,
    //   fullAddress: `${values.street}, ${values.city}, ${values.state} ${
    //     values.zipcode
    //   }`,
    //   address: {
    //     street: values.street,
    //     city: values.city,
    //     state: values.state,
    //     zipcode: values.zipcode
    //   },
    //   yearBuilt: values.yearBuilt,
    //   rooms: {
    //     bathrooms: values.bathrooms,
    //     bedrooms: values.bedrooms
    //   },
    //   finishedSize: {
    //     value: values.finishedSize
    //   },
    //   _project: this.props.match.params._id
    // };
    // const displayMsg = () => {
    //   message.success('Property has been successfully added!', 2);
    //   this.setState({ loading: false });
    // };
    // submitNewBuilding(
    //   formValues,
    //   this.state.file,
    //   { shouldRedirect: true, history },
    //   displayMsg
    // );
  };

  onFileUpload = e => {
    this.setState({ file: e.target.files[0] });
  };

  renderSaveBtn() {
    if (this.state.loading) {
      return (
        <Button
          shape="circle"
          icon="loading"
          size="large"
          disabled
          style={{ marginBottom: "10px" }}
          className="btn-outline-info float-right"
        />
      );
    } else {
      return (
        <Button
          shape="circle"
          icon="plus"
          size="large"
          htmlType="submit"
          style={{ marginBottom: "10px" }}
          className="btn-outline-info float-right"
        />
      );
    }
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <ContentLayout>
        <div id="mapbox" />
        <div className="row">
          <div className="col-md-3">
            <img
              src="http://via.placeholder.com/350x350"
              className="img-fluid"
              alt="property"
            />
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit(this.formSubmit)}>
              <Field label="Street" name="street" component={FormField} />
              <div className="row">
                <div className="col-md-6">
                  <Field label="City" name="city" component={FormField} />
                </div>
                <div className="col-md-6">
                  <Field label="State" name="state" component={FormField} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Field label="Zipcode" name="zipcode" component={FormField} />
                  <h5>Upload an Image</h5>
                  <input
                    onChange={this.onFileUpload}
                    type="file"
                    accept="image/jpeg"
                  />
                </div>
                {error && <strong>{error}</strong>}
              </div>
              <Button
                shape="circle"
                icon="rollback"
                size="large"
                className="btn-outline-danger float-right"
                style={{ marginLeft: "30px " }}
                onClick={() => {
                  this.props.history.goBack();
                }}
              />
              {this.renderSaveBtn()}
            </form>
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <h1 className="display-4">Additional Information</h1>
          <hr />
          <div className="row">
            <div className="col-md-5">
              <Field
                label="# of Bedrooms"
                name="bedrooms"
                component={FormField}
              />
              <Field
                label="# of Bathrooms"
                name="bathrooms"
                component={FormField}
              />
              <Field
                label="Year Built"
                name="yearBuilt"
                component={FormField}
              />
            </div>
            <div className="col-md-5 offset-md-1">
              <Field
                label="Finished Size (SqFt)"
                name="finishedSize"
                component={FormField}
              />
              <Field label="Notes" name="notes" component={FormField} />
            </div>
          </div>
        </div>
      </ContentLayout>
    );
  }
}

function validate(values) {
  console.log("error vlaues: ", values);
  const errors = {};
  if (!values.street) {
    errors.street = "Please enter the street";
  }
  if (!values.city) {
    errors.city = "Please enter the city";
  }
  if (!values.state) {
    errors.state = "Please enter the state";
  }
  if (!values.zipcode) {
    errors.zipcode = "Please enter the zipcode";
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
function mapStateToProps({ mapData }) {
  return { mapData };
}
export default reduxForm({
  form: "propDetail",
  validate
})(
  withRouter(
    connect(
      mapStateToProps,
      actions
    )(PropertyAdd)
  )
);
