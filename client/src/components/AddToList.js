import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { fetchProjects } from '../actions';
const Option = Select.Option;

class AddToList extends Component {
  state = { selected: null };
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderOptions = () => {
    let options = [];
    if (Object.keys(this.props.projects).length == 0) {
      return;
    }
    for (const keys in this.props.projects) {
      options.push(
        <Option key={keys} value={keys}>
          {this.props.projects[keys].title}
        </Option>
      );
    }
    console.log(options);
    return options;
  };
  render() {
    console.log('render: ', this.props.list);
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
function mapStateToProps({ projects }) {
  return { projects };
}
export default connect(mapStateToProps, { fetchProjects })(AddToList);
