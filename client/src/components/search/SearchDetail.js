import React, { Component, Fragment } from 'react';
import { Card } from 'antd';

class SearchDetail extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'Location'
  };
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };
  render() {
    console.log(this.props);
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
      Location: (
        <div>
          <p>Address: {this.props.fullAddress}</p>
          <p>Longitude: {this.props.address.longitude}</p>
          <p>Latitude: {this.props.address.latitude}</p>
        </div>
      ),
      About: (
        <div>
          <p>Type: {this.props.type}</p>
          <p>Year Built: {this.props.yearBuilt}</p>
          <p>Bedrooms: {this.props.rooms.bedrooms}</p>
          <p>Bathrooms: {this.props.rooms.bathrooms}</p>
          <p>Lot Size: {this.props.lotSize.value} SqFt</p>
        </div>
      ),
      LastTransaction: <div>hi</div>,
      TaxAssessment: (
        <div>
          <p>Tax Year: {this.props.taxAssessment ? this.props.taxAssessment.year : 'N/A'}</p>
          <p>Assessment Amount: {this.props.taxAssessment ? `$${Math.round(this.props.taxAssessment.amount)}` : 'N/A'}</p>
        </div>
      )
    };

    const style = {
      card: {
        minHeight: '460px',
        marginTop: '20px',
        marginBottom: '20px'
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
      </Fragment>
    );
  }
}

export default SearchDetail;
