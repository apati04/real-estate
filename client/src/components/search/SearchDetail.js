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
      Location: '123 abc',
      About: (
        <div>
          <h1>test</h1>
        </div>
      ),
      LastTransaction: <div>hi</div>,
      TaxAssessment: (
        <div>
          <h1>test</h1>
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
