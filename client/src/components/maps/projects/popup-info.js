import React, { Component } from 'react';

class PopupInfo extends Component {
  render() {
    const style = {
      img: {
        width: 200,
        height: 200
      }
    }
    console.log(this.props.info);
    const { yearBuilt, finishedSize: { value }, image: { url }, fullAddress, rooms: { bedrooms, bathrooms } } = this.props.info;
    const [street, city, statezip] = fullAddress.split(', ');
    return (
        <div className='row'>
          <div className='col-sm-4'>
            {Array.isArray(url)
              ? <img src={url[0]} alt='property' className='img-fluid' style={style.img}/>
              : <img src={url} alt='property' className='img-fluid' style={style.img}/>
            }
          </div>
          <div className='col-sm-8'>
            <p>{`${street}, ${city}, ${statezip}`}</p>
            <p>Size: {value} SqFt</p>
            <p>Year Built: {yearBuilt}</p>
            <p>Bedrooms: {bedrooms}</p>
            <p>Bathrooms: {bathrooms}</p>
          </div>
        </div>
      );
    }
  }

export default PopupInfo;
