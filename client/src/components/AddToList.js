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
    // return [
    //   <Option key="1" value="one">
    //     One
    //   </Option>,
    //   <Option key="2" value="two">
    //     Two
    //   </Option>,
    //   <Option key="3" value="three">
    //     Three
    //   </Option>
    // ];
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
          className="btn-lg btn btn-outline-info ml-4"
          onClick={() => console.log(this.state)}
        >
          Save
        </button>
      </div>
    );
  }
}
function mapStateToProps({ projects }) {
  return { projects };
}
export default connect(mapStateToProps, { fetchProjects })(AddToList);
