import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Modal, message } from 'antd';
import { submitNewBuilding } from '../actions';
const Option = Select.Option;

class AddToProject extends Component {
  state = {
    selected: null,
    ModalText: 'Add To Project',
    visible: false,
    confirmLoading: false
  };
  showModal = () => {
    const { selected } = this.state;
    const projectName = this.props.projectList[selected].title;
    this.setState({
      ModalText: `Add results to project ${projectName}?`,
      visible: true
    });
  };
  handleOk = async () => {
    const { selected } = this.state;
    const projectName = this.props.projectList[selected].title;
    this.setState({
      confirmLoading: true
    });
    const formValues = {
      ...this.props.data,
      _project: this.state.selected
    };
    try {
      this.props.submitNewBuilding(
        formValues,
        null,
        { shouldRedirect: false },
        () => {
          this.setState({ visible: false, confirmLoading: false });
          message.success(
            `Results have been added to Project ${projectName}`,
            1
          );
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  };
  renderOptions = () => {
    let options = [];
    if (Object.keys(this.props.projectList).length === 0) {
      return;
    }
    for (const keys in this.props.projectList) {
      options.push(
        <Option key={keys} value={keys}>
          {this.props.projectList[keys].title}
        </Option>
      );
    }
    return options;
  };
  render() {
    console.log('render: ', this.state);
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div className="text-right">
        <Select
          size="large"
          defaultValue="Add To Project"
          onChange={value => this.setState({ selected: value })}
        >
          {this.renderOptions()}
        </Select>
        <button className="btn btn-outline-info ml-2" onClick={this.showModal}>
          <i className="fas fa-plus-circle" /> SAVE
        </button>
        <Modal
          title="Add to project"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { submitNewBuilding })(AddToProject);
