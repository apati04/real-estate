import React, { Component, Fragment } from 'react';
import { Card } from 'antd';

class PropertyDetailCard extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'Location'
  }
  onTabChange = (key, type) => {
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
        key: 'LastTransaction',
        tab: 'Last Transaction',
      },
      {
        key: 'TaxAssessment',
        tab: 'Tax Assessment',
      }
    ];

    const contentListNoTitle = {
      Location: this.props.propData.locationData(),
      About: <div>
        {this.props.propData.yearBuiltData()}
        {this.props.propData.sqftData()}
        {this.props.propData.lotSizeData()}
        {this.props.propData.bedroomData()}
        {this.props.propData.bathroomData()}
      </div>
      ,
      LastTransaction: <div>
        {this.props.propData.lastSoldData()}
      </div>,
      TaxAssessment: <div>
        {this.props.propData.taxYearData()}
        {this.props.propData.taxAssessData()}
      </div>
    };

    return (
      <Fragment>
        <Card style={{ marginTop: '10px', minHeight: '440px' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </Fragment>
    );
  }
}

export default PropertyDetailCard;
