import _ from 'lodash';
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
    const { fullAddress, address, type, yearBuilt, rooms, lotSize, financials: { taxAssessment } } = this.props;
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
          <p className='card-title lead'>Address</p>
          <p className='card-text text-info'>{fullAddress}</p>
          <p className='card-title lead'>Longitude</p>
          <p className='card-text text-info'>{address.longitude}</p>
          <p className='card-title lead'>Latitude</p>
          <p className='card-text text-info'>{address.latitude}</p>
        </Fragment>
      ),
      About: (
        <Fragment>
          <p className='card-title lead'>Type</p>
          <p className='card-text text-info'>{type}</p>
          <p className='card-title lead'>Year Built</p>
          <p className='card-text text-info'>{yearBuilt}</p>
          <p className='card-title lead'>Bedrooms</p>
          <p className='card-text text-info'>{rooms.bedrooms}</p>
          <p className='card-title lead'>Bathrooms</p>
          <p className='card-text text-info'>{rooms.bathrooms}</p>
          <p className='card-title lead'>Lot Size</p>
          <p className='card-text text-info'>{lotSize.value} SqFt</p>
        </Fragment>
      ),
      TaxAssessment: (
        <Fragment>
          <p className='card-title lead'>Tax Year</p>
          <p className='card-text text-info'>{_.isEmpty(taxAssessment) ? 'N/A' : taxAssessment.year}</p>
          <p className='card-title lead'>Assessment Amount</p>
          <p className='card-text text-info'>{_.isEmpty(taxAssessment) ? 'N/A' : `$${Math.round(taxAssessment.amount).toLocaleString()}`}</p>
        </Fragment>
      )
    };

    const style = {
      card: {
        minHeight: '500px',
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
