import React, { Component } from 'react';
import ContentLayout from '../components/layout/ContentLayout';
import keys from '../config/keys';
import Search from '../components/forms/Search';
import PropertyDetail from './PropertyDetail';
import AddToList from '../components/AddToList';
import mapboxgl from 'mapbox-gl';
import { Button, Card } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions';

mapboxgl.accessToken = keys.mapboxToken;

class Map extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
    new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [-95.712891, 37.09024],
      zoom: 3
    });
  }

  componentDidUpdate() {
    if (this.props.data.features) {
      const lng = this.props.data.features[0].center[0];
      const lat = this.props.data.features[0].center[1];
      const map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [lng, lat],
        zoom: 15
      });
      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    } else {
      new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [-95.712891, 37.09024],
        zoom: 3.5
      });
    }
  }

  renderPropertyDetail = () => {
    if (this.props.loading) {
      const style = {
        card: {
          marginTop: '10px',
          minHeight: '440px'
        }
      };

      const tabList = [
        {
          key: 'Location',
          tab: 'Location'
        },
        {
          key: 'About',
          tab: 'About'
        },
        {
          key: 'LastTransaction',
          tab: 'Last Transaction'
        },
        {
          key: 'TaxAssessment',
          tab: 'Tax Assessment'
        },
        {
          key: 'AddProperty',
          tab: (
            <Button
              disabled
              className="btn btn-outline-info disabled text-uppercase"
            >
              <i className="fas fa-plus-circle" /> add property
            </Button>
          )
        }
      ];

      return <Card loading={true} style={style.card} tabList={tabList} />;
    } else if (this.props.loading === '') {
      return <div />;
    } else {
      return <PropertyDetail />;
    }
  };

  render() {
    const style = {
      map: {
        height: '40vh',
        width: '100%',
        marginTop: '20px'
      }
    };

    return (
      <ContentLayout>
        <Search />
        <hr />
        <div id="mapbox" style={style.map} />
        <hr />
        <div>
          add to propety
          <AddToList />
        </div>
        {this.renderPropertyDetail()}
      </ContentLayout>
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
