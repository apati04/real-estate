import React, { Component } from 'react';
import { Card } from 'antd';

class PropertyDetailCard extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'Location'
  }
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({[type]: key});
  }
  render() {

    const tabListNoTitle = [
      {
        key: 'Location',
        tab: 'Location'
      }, {
        key: 'About',
        tab: 'About'
      }, {
        key: 'Last Transaction',
        tab: 'Last Transaction',
      },
      {
        key: 'Tax Assessment',
        tab: 'Tax Assessment',
      }
    ];

    const contentListNoTitle = {
      article: <p>article content</p>,
      app: <p>app content</p>,
      project: <p>project content</p>
    };

    return (
      <div>
        <Card style={{
          width: '100%'
        }} tabList={tabListNoTitle} activeTabKey={this.state.noTitleKey} onTabChange={(key) => {
          this.onTabChange(key, 'noTitleKey');
        }}>
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}

export default PropertyDetailCard;
