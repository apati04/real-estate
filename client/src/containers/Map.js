import React, { Component } from "react";
import Search from "../components/forms/Search";
import PropertyDetail from "./PropertyDetail";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import * as actions from "../actions";

mapboxgl.accessToken = "pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg";

class Map extends Component {
  componentDidMount() {
    new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [ -73.98, 40.75 ],
      zoom: 1
    });
    this.props.fetchCurrentUserData();
  }

  componentDidUpdate() {
    const lng = this.props.data.features[0].center[0];
    const lat = this.props.data.features[0].center[1];

    if (!lng || !lat) {
      return <div>Loading...</div>
    }

    const map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [ lng, lat ],
      zoom: 15
    });

    new mapboxgl.Marker().setLngLat([ lng, lat ]).addTo(map);
  }

  render() {
    return (
      <div className="container">
        <Search/>
        <div id="mapbox" style={{height: "40vh", width: "100%", marginTop: "20px"}}/>
        <PropertyDetail/>
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
