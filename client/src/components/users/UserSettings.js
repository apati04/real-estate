import React, { Component } from 'react';
import ContentLayout from '../layout/ContentLayout';
import { connect } from 'react-redux';
import TextField from '../forms/FormField';
import { reduxForm, Field } from 'redux-form';
import './styles.css';
import * as actions from '../../actions';

class UserSettings extends Component {
  render() {
    return (
      <ContentLayout>
        <div className="container">
          <div className="row mb-4 justify-content-between">
            <div className="col-md-4">
              <h2 className="text-center text-nowrap">Profile Settings</h2>
            </div>
          </div>
          <div className="row justify-content-between align-items-start">
            <div className="col-12 col-md-4">
              <img
                src="http://via.placeholder.com/220x220"
                className="rounded-circle img-fluid d-block mx-auto"
                alt="avatar"
              />
            </div>
            <div className="col-12 col-md-8">
              <form>
                <Field
                  type="text"
                  name="displayName"
                  component={TextField}
                  label="Display Name"
                />
                <Field
                  type="text"
                  name="fullName"
                  component={TextField}
                  label="Name"
                />
                <Field
                  type="email"
                  name="email"
                  component={TextField}
                  label="Email"
                />
              </form>
            </div>
          </div>
        </div>
      </ContentLayout>
    );
  }
}
function mapStateToProps(state) {
  return { userState: state };
}
export default reduxForm({ form: 'userSettingsForm' })(
  connect(mapStateToProps, actions)(UserSettings)
);
