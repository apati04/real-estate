import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Card, Button } from 'antd';
import * as actions from '../actions';
import mapboxgl from 'mapbox-gl';
import keys from '../config/keys';
import ContentLayout from '../components/layout/ContentLayout';
import { withRouter } from 'react-router-dom';
const { Sider } = Layout;

mapboxgl.accessToken = keys.mapboxToken;

class ProjectMap extends Component {
  state = {
    collapsed: true,
    address: '',
    latitude: '',
    longitude: ''
  };

  open() {
    this.setState({ collapsed: false });
  }

  close() {
    this.setState({ collapsed: true });
  }

  renderSidebarContent() {
    const splitAddress = this.state.address.split(' ');
    const cityState = splitAddress[splitAddress.length - 2];
    const zipcode = splitAddress[splitAddress.length - 1];
    const street = splitAddress
      .splice(splitAddress, splitAddress.length - 2)
      .join(' ');
    const style = {
      closeBtn: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
      },
      card: {
        backgroundColor: '#001529',
        border: 'none'
      },
      icon: {
        fontSize: '24px',
        color: '#fff',
        marginBottom: '10px'
      }
    };
    if (!this.state.collapsed) {
      return (
        <Fragment>
          <Card
            cover={
              <img
                src="http://via.placeholder.com/150x150"
                className="img-fluid"
                alt="property"
              />
            }
            style={style.card}
          >
            <div className="text-center">
              <Icon type="home" style={style.icon} />
            </div>
            <div style={{ color: '#fff' }}>
              <h6 className="lead">{street}</h6>
              <h6 className="lead">{`${cityState}, ${zipcode}`}</h6>
              <p className="small">{`Latitude: ${this.state.latitude}`}</p>
              <p className="small">{`Longitude: ${this.state.longitude}`}</p>
            </div>
          </Card>
          <Button
            onClick={() => this.close()}
            style={style.closeBtn}
            className="btn-danger"
          >
            <Icon type="close" style={{ fontSize: '24px' }} />
          </Button>
        </Fragment>
      );
    } else {
      return <Menu theme="dark" mode="inline" />;
    }
  }

  renderMap() {
    if (this.props.location.state) {
      const { properties } = this.props.location.state;
      const propJson = properties.map(prop => {
        return {
          address: prop.address,
          coordinates:
            prop.longitude < 0
              ? [prop.longitude, prop.latitude]
              : [prop.latitude, prop.longitude]
        };
      });

      const map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [-95.712891, 37.09024],
        zoom: 4
      });

      propJson.forEach(data => {
        const marker = new mapboxgl.Marker()
          .setLngLat(data.coordinates)
          .addTo(map);
        marker._element.addEventListener('click', () => {
          this.open();
          this.setState({
            address: data.address,
            latitude: data.coordinates[1],
            longitude: data.coordinates[0]
          });
        });
      });
    } else {
      new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        center: [-95.712891, 37.09024],
        zoom: 4
      });
    }
  }

  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.renderMap();
  }

  render() {
    const style = {
      map: {
        height: '80vh',
        width: '100%'
      },
      button: {
        marginBottom: '20px'
      },
      mapBox: {
        display: 'flex',
        width: '100%',
        marginTop: '60px'
      }
    };

    return (
      <ContentLayout>
        <button
          onClick={() => this.props.history.goBack()}
          className="btn btn-raised btn-danger float-right"
          style={style.button}
        >
          <i className="fas fa-undo" /> BACK
        </button>
        <div style={style.mapBox}>
          <div id="mapbox" style={style.map} />
          <Sider
            collapsible="collapsible"
            collapsed={this.state.collapsed}
            trigger={null}
            id="mapsidebar"
          >
            {this.renderSidebarContent()}
          </Sider>
        </div>
      </ContentLayout>
    );
  }
}

function mapStateToProps({ mapData: data }) {
  return {
    data: data.data
  };
}

export default withRouter(connect(mapStateToProps, actions)(ProjectMap));
