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
    // this.props.fetchMapData(this.props.location.state.address);
    const { properties } = this.props.location.state;
    const geojson = properties.map(prop => {
      return {
        'coordinates': [ prop.longitude, prop.latitude ]
      }
    });
    console.log(geojson);

    new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [ -95.712891, 37.090240 ],
      zoom: 4
    });

    // geojson.forEach(marker => {
    //   var el = document.createElement('div');
    //   el.className = 'marker';
    //   // el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
    //   // el.style.width = marker.properties.iconSize[0] + 'px';
    //   // el.style.height = marker.properties.iconSize[1] + 'px';
    //
    //   // el.addEventListener('click', function() {
    //   //     window.alert(marker.properties.message);
    //   // });
    //
    //   new mapboxgl.Marker(el)
    //       .setLngLat(marker.coordinates)
    //       .addTo(map);
    // });
  }

  // componentDidUpdate() {
  //   if (this.props.data.features) {
  //     const lng = this.props.data.features[0].center[0];
  //     const lat = this.props.data.features[0].center[1];
  //     const map = new mapboxgl.Map({
  //       container: 'mapbox',
  //       style: 'mapbox://styles/mapbox/outdoors-v10',
  //       center: [ lng, lat ],
  //       zoom: 15
  //     });
  //     new mapboxgl.Marker().setLngLat([ lng, lat ]).addTo(map);
  //   } else {
  //     new mapboxgl.Map({
  //       container: 'mapbox',
  //       style: 'mapbox://styles/mapbox/outdoors-v10',
  //       center: [ -73.98, 40.75 ],
  //       zoom: 1
  //     });
  //   }
  // }

  render() {
    console.log(this.props.location.state.properties);
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
