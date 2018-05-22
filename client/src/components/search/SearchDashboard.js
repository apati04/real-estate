import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Spin } from 'antd';
import ContentLayout from '../layout/ContentLayout';
import SearchForm from './forms/SearchForm';
import SearchDetail from './SearchDetail';
import AddToProject from '../AddToProject';
import { fetchProjects } from '../../actions';
class SearchDashboard extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  searchResults = () => {
    const { isFetching, data } = this.props.mapData;

    if (isFetching) {
      return (
        <div className='d-flex justify-content-center mt-5'>
          <Spin size='large' tip='Fetching property data...'/>
        </div>
      );
    }
    if (Object.keys(data).length === 0) {
      return <div />;
    }
    if (data.error) {
      return <h1 className='display-4 text-danger mt-5 text-center'>{data.error.text}</h1>
    }
    return (
      <div>
        <SearchDetail {...data} />
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
