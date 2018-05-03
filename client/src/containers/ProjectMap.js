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
    const { properties } = this.props.location.state;
    const propJson = properties.map(prop => {
      return {
        'address': prop.address,
        'coordinates': prop.longitude < 0 ? [ prop.longitude, prop.latitude ] : [ prop.latitude, prop.longitude ]
      }
    });

    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [ -95.712891, 37.090240 ],
      zoom: 4
    });

    propJson.forEach(data => {
      new mapboxgl.Marker().setLngLat(data.coordinates).addTo(map);
      new mapboxgl.Popup().setLngLat(data.coordinates).setHTML(data.address).addTo(map);
    });
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
          to='/projects'
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
