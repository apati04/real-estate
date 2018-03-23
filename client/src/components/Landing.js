import React from 'react';
import VideoCarousel from './VideoCarousel';
import { View, Mask, Button } from 'mdbreact';
import { Link } from 'react-router-dom';

const Landing = () => {

  const style = {
    carousel: {
      position: 'absolute',
      top: '0',
      left: '0'
    }
  }

  return (
    <View className="hm-black-strong" style={style.carousel}>
      <VideoCarousel/>
      <Mask className="d-flex full-bg-img flex-center ">
        <div className="d-flex container justify-content-around p-0 text-left white-text wow fadeInUp">
          <div className="text-center">
            <h2 className="mb-4 h2-responsive">Welcome to Real Estate Manager</h2>
            <h3 className="h3-responsive">Insert something catchy here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis libero orci, in venenatis lectus gravida condimentum. Nullam pretium urna ut lacinia gravida. Proin pellentesque, est eu posuere suscipit, erat neque ultricies erat, non tempor justo sem blandit massa. Cras a nulla scelerisque lacus rutrum vulputate. Integer imperdiet, massa non.</p>
            <Link to="/login"><Button>GO TO LOGIN</Button></Link>
          </div>
        </div>
      </Mask>
    </View>
  );
}

export default Landing;
