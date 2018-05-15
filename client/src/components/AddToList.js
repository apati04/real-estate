import React, { Component } from 'react';
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
    if (Object.keys(this.props.projects).length == 0) {
      return <div>noprojects</div>;
    }
    <Option />;
    return <div>render</div>;
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
      <div>
        {/* <Select
          size="large"
          defaultValue="Add To Project"
          onChange={value => this.setState({ selected: value })}
        >
        </Select> */}
        {this.renderOptions()}
        <button onClick={() => console.log(this.state)}>Save</button>
      </div>
    );
  }
}
function mapStateToProps({ projects }) {
  return { projects };
}
export default connect(mapStateToProps, { fetchProjects })(AddToList);
