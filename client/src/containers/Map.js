import React, { Component } from 'react';
import ContentLayout from '../components/layout/ContentLayout';
import keys from '../config/keys';
import Search from '../components/forms/Search';
import PropertyDetail from './PropertyDetail';
import mapboxgl from 'mapbox-gl';
import { Button, Card } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Map extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  componentDidUpdate() {
    if (this.props.data.features) {
      const lng = this.props.data.features[0]
        ? this.props.data.features[0].center[0]
        : -95.712891;
      const lat = this.props.data.features[0]
        ? this.props.data.features[0].center[1]
        : 37.09024;
      const map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [lng, lat],
        zoom: this.props.data.features[0] ? 15 : 3.5
      }).addControl(new mapboxgl.NavigationControl());
      this.props.data.features[0] ? (
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
      ) : (
        <div />
      );
    }
  }

  renderPropertyDetail = () => {
    if (this.props.loading) {
      const style = {
        card: {
          marginTop: '20px',
          minHeight: '460px'
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
        }
      ];

      return <Card loading={true} style={style.card} tabList={tabList} />;
    } else if (this.props.loading === '') {
      return <div />;
    } else {
      console.log('prop: ', this.props);
      return <PropertyDetail />;
    }
  };

  render() {
    const style = {
      map: {
        minHeight: '460px',
        width: '100%',
        marginTop: '20px'
      }
    };

    return (
      <ContentLayout>
        <Search />
        <div className="row">
          <div className="col-sm-7">
            <div id="mapbox" style={style.map} />
          </div>
          <div className="col-sm-5">{this.renderPropertyDetail()}</div>
        </div>
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
