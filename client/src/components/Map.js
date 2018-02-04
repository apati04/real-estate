import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg";

class Map extends Component {
  componentDidMount() {
    new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/dark-v9",
      center: [ -74.50, 40 ],
      zoom: 9
    });
  }

  render() {
    return (
      <div>
        <div id="mapbox" style={{height: "50vh", width: "100%", marginTop: "20px"}}/>
      </div>
    )
  }
}

export default Map;
