import _ from 'lodash';
import React, { Component } from 'react';
import ProjectCollection from './ProjectForm/ProjectCollection';
import { Link } from 'react-router-dom';
import ContentLayout from '../layout/ContentLayout';

class ProjectCreate extends Component {
  render() {
    return (
      <div>
        <ProjectCollection />
      </div>
    );
  }
}

export default ProjectCreate;
