import React from 'react';
import { Carousel } from 'antd';

const LandingCarousel = () => {

  const style = {
    img: {
      minWidth: '100%',
      maxHeight: '80vh'
    }
  }

  return (
    <Carousel autoplay dots={false}>
      <div>
        <img src='https://i.imgur.com/sltaQ8E.jpg' className='img-fluid' style={style.img} alt='car-1'/>
      </div>
      <div>
        <img src='https://i.imgur.com/5beXJXj.jpg?2' className='img-fluid' style={style.img} alt='car-2'/>
      </div>
      <div>
        <img src='https://i.imgur.com/PDUdRt7.jpg' className='img-fluid' style={style.img} alt='car-3'/>
      </div>
    </Carousel>
  );
}

export default LandingCarousel;
