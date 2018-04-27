import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import mapboxgl from 'mapbox-gl';
import keys from '../config/keys';
import ContentLayout from '../components/layout/ContentLayout';

mapboxgl.accessToken = keys.mapboxToken;

class ProjectMap extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.props.fetchMapData(this.props.location.state.address);
  }

  componentDidUpdate() {
    if (this.props.data.features) {
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

  render() {
    const style = {
      map: {
        height: '80vh',
        width: '100%'
      },
      button: {
        marginBottom: '20px'
      }
    }

    return (
      <ContentLayout>
        <Link
          to='/projects/edit'
          className="btn btn-raised btn-danger float-right"
          style={style.button}
        >
          BACK
        </Link>
        <div id='mapbox'
          style={style.map}
        />
      </ContentLayout>
    );
  }
}

function mapStateToProps({ mapData: data }) {
  return {
    data: data.data
  };
}

export default connect(mapStateToProps, actions)(ProjectMap);
