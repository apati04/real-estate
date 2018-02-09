import React, { Component } from "react";
import FormField from "./FormField";
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux";
import * as actions from "../../actions";

class Search extends Component {
  formSubmit = (value) => {
    this.props.fetchMapData(`${value.address},${value.citystatezip}`);
    this.props.fetchPropertyData(value.address, value.citystatezip);
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          label="address"
          name="address"
          component={FormField}
        />
        <Field
          label="city/state/zip"
          name="citystatezip"
          component={FormField}
        />
        <button className="btn btn-success" type="submit">SEARCH</button>
        <button className="btn btn-danger float-right" type="button" onClick={() => window.history.back()}>BACK</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.address) {
    errors.address = "Please enter the street address";
  }
  if (!values.citystatezip) {
    errors.citystatezip = "Please enter the city, state and/or zipcode";
  }
  return errors;
}

export default reduxForm({ form: "location", validate })(connect(null, actions)(Search));
