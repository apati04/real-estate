import React, { Component } from 'react';
import AntLayout from '../components/layout/AntLayout';
import FormField from '../components/forms/FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Google from '../images/btn_google_signin_dark_pressed_web.png';

class LoginForm extends Component {
  formSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { handleSubmit } = this.props;
    const style = {
      container: {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <AntLayout>
        <div style={ style.container }>
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
            <div>
              <button
                style={{ background: '#00aced' }}
                type="button"
                className="btn bmd-btn-fab"
              >
                <a href="/auth/twitter">
                  <i
                    style={{ fontSize: '1.6rem' }}
                    className="fab fa-twitter align-middle text-white"
                  />
                </a>
              </button>
              <a href="/auth/google">
                <img className="btn" src={Google} alt="google" />
              </a>
              <h6>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </h6>
            </div>
          </form>
        </div>
      </AntLayout>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please enter your username';
  }
  if (!values.password) {
    errors.password = 'Please enter your password';
  }
  return errors;
}

export default reduxForm({ form: 'loginInfo', validate })(
  connect(null, actions)(LoginForm)
);
