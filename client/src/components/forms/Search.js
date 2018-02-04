import React, { Component } from "react";
import FormField from "./FormField";
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux";
import * as actions from "../../actions";

class Search extends Component {

  formSubmit = ({ location }) => {
    this.props.fetchMapData(location);
  }

  render() {

    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name="location"
          type="text"
          component={FormField}
        />
        <button className="btn btn-success">SEARCH</button>
      </form>
    );
  }
}

export default reduxForm({ form: "location" })(connect(null, actions)(Search));
