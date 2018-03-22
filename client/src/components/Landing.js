import React from 'react';
import VideoCarousel from './VideoCarousel';

const Landing = () => {

  const style = {
    container: {
      marginRight: '250px'
    }
  }

  return (
    <div style={style.container}>
      <VideoCarousel/>
    </div>
  );
}

export default Landing;
