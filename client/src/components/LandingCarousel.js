import React from 'react';
import { Carousel } from 'antd';

const LandingCarousel = () => {
  return (
    <Carousel autoplay dots={false}>
      <div>
        <img src='https://placeimg.com/640/480/animals/grayscale' className='img-fluid'/>
      </div>
      <div>
        <img src='https://placeimg.com/640/480/nature/grayscale' className='img-fluid'/>
      </div>
      <div>
        <img src='https://placeimg.com/640/480/tech/grayscale' className='img-fluid'/>
      </div>
      <div>
        <img src='https://placeimg.com/640/480/arch/grayscale' className='img-fluid'/>
      </div>
    </Carousel>
  );
}

export default LandingCarousel;
