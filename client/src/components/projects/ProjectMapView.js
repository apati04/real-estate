import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLayout from '../layout/ContentLayout';
import { fetchProjectPostsIfNeeded } from '../../actions';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXBhdGkwNCIsImEiOiJjamFraWtwOWUyamdpMndvMmc1bWNvMnowIn0.QUnCBEj6objBvZoWPa0UTQ';
class ProjectMapView extends Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 1.5
  };
  componentDidMount() {
    this.props.fetchProjectPostsIfNeeded(this.props.match.params._id);
    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [lng, lat],
      zoom
    });
    this.map.on('move', () => {
      const { lng, lat } = this.map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.postsInProject !== this.props.postsInProject) {
      this.props.fetchProjectPostsIfNeeded(nextProps.match.params._id);
    }
  }
  renderMapView = userPosts => {
    if (userPosts.isFetching === false) {
      if (userPosts.items.length === 0) {
        return <div>You have no paosts</div>;
      }
    }

    return;
  };
  render() {
    const { lng, lat, zoom } = this.state;
    const { posts } = this.props;

    const style = {
      map: {
        minHeight: '460px',
        width: '100%',
        marginTop: '20px'
      }
    };
    let mapview;
    if (Object.keys(posts).length === 0) {
      mapview = <div>Loading...</div>;
    } else {
      mapview = <div>{this.renderMapView(posts)} </div>;
    }
    return (
      <ContentLayout>
        {mapview}
        <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        <div
          ref={el => {
            return (this.mapContainer = el);
          }}
          style={style.map}
        />
      </ContentLayout>
    );
  }
}
function mapStateToProps({ postsInProject, projects }, ownProps) {
  return {
    posts: postsInProject[ownProps.match.params._id] || {},
    project: projects[ownProps.match.params._id] || {}
  };
}
export default connect(mapStateToProps, { fetchProjectPostsIfNeeded })(
  ProjectMapView
);
