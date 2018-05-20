import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentLayout from '../layout/ContentLayout';
import SearchForm from './forms/SearchForm';
import SearchDisplay from './SearchDisplay';
import AddToProject from '../AddToProject';
import { fetchProjects } from '../../actions';
class SearchDashboard extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  searchResults = () => {
    const { isFetching, data } = this.props.mapData;

    if (isFetching) {
      return <div>Getting search results...</div>;
    }
    if (Object.keys(data).length === 0) {
      return <div />;
    }
    return (
      <div>
        <SearchDisplay {...data} />
        <AddToProject projectList={this.props.projects} data={data} />
      </div>
    );
  };
  render() {
    return (
      <ContentLayout>
        <SearchForm />
        {this.searchResults()}
      </ContentLayout>
    );
  }
}
function mapStateToProps({ mapData, projects }) {
  return { mapData, projects };
}
export default reduxForm({ form: 'searchProperty' })(
  connect(mapStateToProps, { fetchProjects })(SearchDashboard)
);
