import React, { Component } from 'react';
import keys from '../config/keys';
import Search from '../components/forms/Search';
import PropertyDetail from './PropertyDetail';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import * as actions from '../actions';

mapboxgl.accessToken = keys.mapboxToken;

class Map extends Component {
  componentWillUnmount() {
    this.props.resetPropData();
  }

  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.props.fetchMapData([ -77.05, 38.889 ]);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { coords: { longitude }} = await position;
        const { coords: { latitude }} = await position;
        const map = new mapboxgl.Map({
          container: 'mapbox',
          style: 'mapbox://styles/mapbox/outdoors-v10',
          center: [ longitude, latitude ],
          zoom: 15
        });
        new mapboxgl.Marker().setLngLat([ longitude, latitude ]).addTo(map);
      });
    } else {
      alert('This browser does not support geolocation.');
      this.props.fetchMapData([ -77.05, 38.889 ]);
    }
  }

  componentDidUpdate() {
    if (this.props.data.features[0]) {
      const lng = this.props.data.features[0].center[0];
      const lat = this.props.data.features[0].center[1];
      const map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [ lng, lat ],
        zoom: 15
      });
      new mapboxgl.Marker().setLngLat([ lng, lat ]).addTo(map);
    } else {
      new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [ -73.98, 40.75 ],
        zoom: 1
      });
    }
  }

  renderPropertyDetail = () => {
    if (this.props.loading) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else if (this.props.loading === '') {
      return <div />;
    } else {
      return (
        <div>
          <PropertyDetail />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Search />
        <hr />
        <div
          id="mapbox"
          style={{ height: '40vh', width: '100%', marginTop: '20px' }}
        />
        <hr />
        {this.renderPropertyDetail()}
      </div>
    );
  }
}

function mapStateToProps({ mapData: { data }, propData: { loading } }) {
  return {
    data,
    loading
  };
}

export default connect(mapStateToProps, actions)(Map);
