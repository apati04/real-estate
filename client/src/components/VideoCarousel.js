import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

class VideoCarousel extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.state = {
        activeItem: 1,
        maxLength: 1
      };
    }

    next() {
      const nextItem = this.state.activeItem + 1;
      if(nextItem > this.state.maxLength) {
        this.setState({ activeItem: 1 });
      } else {
        this.setState({ activeItem: nextItem });
      }
    }

  render() {
    return (
      <Carousel
        activeItem={1}
        next={this.next}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <video className="video-fluid d-block" loop>
              <source src="/video/city.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default VideoCarousel;
