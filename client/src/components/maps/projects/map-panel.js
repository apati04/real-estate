import React, { Component } from 'react';
import { Menu, Spin } from 'antd';
const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
);

class MapPanel extends Component {
  state = {
    selected: {}
  };
  _renderButton = (item, index, originalArray) => {
    // return (
    //   <div key={`btn-${index}`} className="input">
    //     <input
    //       type="radio"
    //       name="building"
    //       id={`${item.zpid}-${index}`}
    //       defaultChecked={item.fullAddress === originalArray[0].fullAddress}
    //       onClick={() => this.props.onViewportChange(item)}
    //     />
    //     <label htmlFor={`${item.zpid}-${index}`}>{item.fullAddress}</label>
    //   </div>
    // );
    return (
      <Menu.Item
        key={`btn-${index}`}
        style={{ padding: '20px' }}
        className="border rounded d-flex align-items-center"
        onClick={() => {
          this.props.onViewportChange(item);
        }}
      >
        <div className="text-capitalize">
          <span>
            {`${item.address.street} ${item.address.city.toLowerCase()}, ${
              item.address.state
            } ${item.address.zipcode}`}
          </span>
        </div>
      </Menu.Item>
    );
  };
  toggleColor = () => {
    this.setState({ selected: { backgroundColor: 'red' } });
  };
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <div className="text-left">
          <h4>Project {this.props.projectName}</h4>
          {this.props.info.length ? (
            <Menu className="border-right-0 w-100">
              {this.props.info.map(this._renderButton)}
            </Menu>
          ) : (
            <div className='d-flex justify-content-center mt-5'>
              <Spin size='large' tip='Fetching list...'/>
            </div>
          )}
        </div>
      </Container>
    );
  }
}
export default MapPanel;
