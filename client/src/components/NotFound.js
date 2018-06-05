import React, { Component } from 'react';
import { Button } from 'antd';
import ContentLayout from './layout/ContentLayout';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <ContentLayout>
        <div id="mapbox" />
        <h1>PAGE NOT FOUND</h1>
        <Button
          shape='circle'
          icon='rollback'
          size='large'
          className='btn-outline-danger'
          onClick={() => {
            this.props.history.goBack();
          }}
        />
      </ContentLayout>
    );
  }
}

export default NotFound;
