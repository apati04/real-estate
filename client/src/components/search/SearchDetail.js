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
        key: 'TaxAssessment',
        tab: 'Tax Assessment'
      }
    ];

    const cardContent = {
      Location: (
        <Fragment>
          <p className='card-title'>Address</p>
          <p className='card-text'>{this.props.fullAddress}</p>
          <p className='card-title'>Longitude</p>
          <p className='card-text'>{this.props.address.longitude}</p>
          <p className='card-title'>Latitude</p>
          <p className='card-text'>{this.props.address.latitude}</p>
        </Fragment>
      ),
      About: (
        <Fragment>
          <p className='card-title'>Type</p>
          <p className='card-text'>{this.props.type}</p>
          <p className='card-title'>Year Built</p>
          <p className='card-text'>{this.props.yearBuilt}</p>
          <p className='card-title'>Bedrooms</p>
          <p className='card-text'>{this.props.rooms.bedrooms}</p>
          <p className='card-title'>Bathrooms</p>
          <p className='card-text'>{this.props.rooms.bathrooms}</p>
          <p className='card-title'>Lot Size</p>
          <p className='card-text'>{this.props.lotSize.value} SqFt</p>
        </Fragment>
      ),
      TaxAssessment: (
        <Fragment>
          <p className='card-title'>Tax Year</p>
          <p className='card-text'>{this.props.financials ? this.props.financials.taxAssessment.year : 'N/A'}</p>
          <p className='card-title'>Assessment Amount</p>
          <p className='card-text'>{this.props.financials ? `$${Math.round(this.props.financials.taxAssessment.amount).toLocaleString()}` : 'N/A'}</p>
        </Fragment>
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
