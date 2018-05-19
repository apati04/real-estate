import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { fetchProjects } from '../actions';
const Option = Select.Option;

class AddToList extends Component {
  state = {
    selected: null
  };
  renderOptions = () => {
    let options = [];
    if (Object.keys(this.props.projectList).length == 0) {
      return;
    }
    for (const keys in this.props.projectList) {
      options.push(
        <Option key={keys} value={keys}>
          {this.props.projectList[keys].title}
        </Option>
      );
    }
    console.log(options);
    return options;
  };
  render() {
    console.log('render: ', this.props);
    return (
      <div className="text-right">
        <Select
          size="large"
          defaultValue="Add To Project"
          onChange={value => this.setState({ selected: value })}
        >
          {this.renderOptions()}
        </Select>
        <button
          className="btn btn-outline-info ml-2"
          onClick={() => console.log(this.state)}
        >
          <i className="fas fa-plus-circle" /> SAVE
        </button>
      </div>
    );
  }
}

export default AddToList;
