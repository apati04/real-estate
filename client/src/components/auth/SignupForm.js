import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class Signup extends Component {
  formSubmit = formValues => {
    this.props.signup(formValues, () => {
      this.props.history.push('/dashboard');
    });
  };
  render() {
    const { handleSubmit } = this.props;

    return (
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
        <button>Sign up</button>
      </form>
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
  reduxForm({ form: 'signup' })
)(Signup);
