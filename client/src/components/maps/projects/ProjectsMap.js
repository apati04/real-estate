import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './projectsmap.css';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';

import ProjectPanel from './map-panel';
import ProjectIcon from './map-marker';
import PropertyInfo from './popup-info';

import CITIES from '../../data/cities.json';
const TOKEN = ''; // Set your mapbox token here
class ProjectsMap extends Component {
  render() {
    console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);
    return <div />;
  }
}

export default ProjectsMap;
