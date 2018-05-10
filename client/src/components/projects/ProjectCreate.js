import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import ProjectForm from './ProjectForm/ProjectForm';
import { Link } from 'react-router-dom';
import ContentLayout from '../layout/ContentLayout';

const showResults = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(500);
  window.alert(`You subbmited:\n\n${JSON.stringify(values, null, 2)}`);
};
class ProjectCreate extends Component {
  render() {
    return <ProjectForm onSubmit={showResults} />;
  }
}

export default ProjectCreate;
