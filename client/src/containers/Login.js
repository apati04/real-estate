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

  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {
    console.log("unmounted");
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
            <button type="submit" className="btn btn-primary">Login</button>
            <Link
              to="/signup"
              className="btn btn-info"
              style={{marginLeft: "10px"}}
            >
              Sign Up
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
  return errors;
}

export default reduxForm({ form: "loginInfo", validate })(connect(null, actions)(LoginForm));
