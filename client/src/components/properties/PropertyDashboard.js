import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions';
class PropertyDashboard extends Component {
  componentDidMount() {
    const project = this.props.match.params._id;
    this.props.fetchProject(project);
  }

  render() {
    if (!this.props.project) {
      return '';
    }
    return (
      <div>
        <h2>Welcome to project: {this.props.project.title}</h2>
      </div>
    );
  }
}

function mapStateToProps({ projects }, ownProps) {
  return { project: projects[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchProject })(PropertyDashboard);
