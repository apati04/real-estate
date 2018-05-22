import React, { Component } from 'react';

class PopupInfo extends Component {
  render() {
    console.log(this.props.info);
    return <div>RenderPropertyInfohere</div>;
  }
}

export default PopupInfo;
