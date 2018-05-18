import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import AddToList from '../components/AddToList';
class PropertyDetailCard extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'Location'
  };
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };
  render() {
    console.log('detail: ', this.props);
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

    const cardContent = {
      Location: this.props.propData.locationData(),
      About: (
        <div>
          {this.props.propData.yearBuiltData()}
          {this.props.propData.sqftData()}
          {this.props.propData.lotSizeData()}
          {this.props.propData.bedroomData()}
          {this.props.propData.bathroomData()}
        </div>
      ),
      LastTransaction: <div>{this.props.propData.lastSoldData()}</div>,
      TaxAssessment: (
        <div>
          {this.props.propData.taxYearData()}
          {this.props.propData.taxAssessData()}
        </div>
      )
    };

    const style = {
      card: {
        minHeight: '460px',
        marginTop: '20px'
      }
    };

    return (
      <Fragment>
        <Card
          style={style.card}
          tabList={tabList}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {cardContent[this.state.noTitleKey]}
        </Card>
        <AddToList />
      </Fragment>
    );
  }
}

export default PropertyDetailCard;
