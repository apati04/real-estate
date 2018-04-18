import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
const style = {
  layout: {
    padding: '0 24px 24px'
  },
  content: {
    background: '#fff',
    padding: 24,
    margin: 0,
    minHeight: 280
  }
}

const ContentLayout = props => {
  return (
    <Layout style={ style.layout }>
      <Content style={ style.content }>
        <div id='mapbox'></div>
        { props.children }
      </Content>
    </Layout>
  );
}

export default ContentLayout;
