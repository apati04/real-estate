import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, CarouselCaption } from 'mdbreact';

class VideoCarousel extends Component {
  render() {
    return (
      <Carousel
        activeItem={1}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="/video/city.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default VideoCarousel;
