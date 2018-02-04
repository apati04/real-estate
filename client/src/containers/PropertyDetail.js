import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class PropertyDetail extends Component {
  render() {
    const jsonData = this.props.data[Object.keys(this.props.data)[1]];

    if (!jsonData) {
      return <div></div>
    } else if (!jsonData.response) {
      return <h1>No Data :(</h1>
    }

    const { response: { results: { result } } } = jsonData;
    console.log(result);

    if (!result.address) {
      return <h1>No Data :(</h1>
    }
    
    return (
      <div>
        <h1>{result.address.street._text}</h1>
      </div>
    );
  }
}

function mapStateToProps({ propData: { data } }) {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(PropertyDetail);
