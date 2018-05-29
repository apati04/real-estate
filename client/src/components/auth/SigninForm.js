import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
class Signin extends Component {
  formSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push('/dashboard');
    });
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.formSubmit)}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" component="input" />
          </fieldset>
          <small>{this.props.authError}</small>
          <button>Sign In</button>
        </form>
        <div>
          Don't have an account? <Link to="/signup">Create a new account</Link>
        </div>
        <div>
          <a href="/auth/google">Or signin with google</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    authError: auth.authError
  };
}
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
