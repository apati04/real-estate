import React, { Component } from "react";
import Search from "../components/forms/Search";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import * as actions from "../actions";

mapboxgl.accessToken = "pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg";

class Map extends Component {
  componentDidMount() {
    new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [ -73.98, 40.75 ],
      zoom: 2
    });
  }

  componentDidUpdate() {
    const lng = this.props.data.features[0].center[0];
    const lat = this.props.data.features[0].center[1];
    new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [ lng, lat ],
      zoom: 10
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <Search/>
        <div id="mapbox" style={{height: "50vh", width: "100%", marginTop: "20px"}}/>
      </div>
    )
  }
}

function mapStateToProps({ mapData: { data } }) {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(Map);
