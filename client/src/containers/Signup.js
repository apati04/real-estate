import React, { Component } from "react";
import FormField from "../components/forms/FormField";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

class LoginForm extends Component {

  formSubmit = values => {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    const style = {
        container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }

    return (
      <div style={style.container}>
        <div>
          <h1>Real Estate</h1>
          <form onSubmit={handleSubmit(this.formSubmit)}>
            <Field
              label="Username"
              name="username"
              type="text"
              component={FormField}
            />
            <Field
              label="Password"
              name="password"
              type="password"
              component={FormField}
            />
            <Field
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
              component={FormField}
            />
            <Field
              label="First Name"
              name="firstName"
              type="text"
              component={FormField}
            />
            <Field
              label="Last Name"
              name="lastName"
              type="text"
              component={FormField}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              component={FormField}
            />
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <Link
              to="/"
              className="btn btn-danger"
              style={{marginLeft: "10px"}}
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Please enter your username";
  }
  if (!values.password) {
    errors.password = "Please enter your password";
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Password must match";
  }
  if (!values.firstName) {
    errors.firstName = "Please enter your first name";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter your last name";
  }
  if (!values.email) {
    errors.email = "Please enter your email";
  }
  return errors;
}

export default reduxForm({ form: "signupInfo", validate })(connect(null, actions)(LoginForm));
