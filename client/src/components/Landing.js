import React, { Component } from 'react';
import VideoCarousel from './VideoCarousel';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    const style = {
      parallax: {
        position: 'absolute',
        width: '100%',
        top: '0',
        left: '0'
      },
      text: {
        color: 'white'
      }
    }

    return (
      <div style={style.parallax}>
        <div className="view">
          <VideoCarousel/>
          <div className="full-bg-img">
            <div className="mask rgba-dark-light">
              <div className="container flex-center text-center">
                <div className="row mt-5">
                  <div className="col-md-12 wow fadeIn mb-3" style={style.text}>
                    <h2 className="mb-4 h2-responsive">Welcome to Real Estate Manager</h2>
                    <h3 className="h3-responsive">Insert something catchy here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis libero orci, in venenatis lectus gravida condimentum. Nullam pretium urna ut lacinia gravida. Proin pellentesque, est eu posuere suscipit, erat neque ultricies erat, non tempor justo sem blandit massa. Cras a nulla scelerisque lacus rutrum vulputate. Integer imperdiet, massa non.</p>
                    <Link to="/login"><Button>GO TO LOGIN</Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-3">
              <h1 className="font-weight-bold light-blue-text my-3">Lorem ipsum dolor sit amet, consectetur quis elit.</h1>
              <p align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.</p>
            </div>
          </div>
        </div>
        {/* <div className="view jarallax" style={{backgroundImage: "url(https://mdbootstrap.com/img/Photos/Others/food2.jpg)"}}>
          <div className="full-bg-img">
            <div className="mask rgba-dark-slight"></div>
          </div>
        </div> */}
        <div style={{ background: "url(/images/la.jpg)", height: "50vh", backgroundAttachment: 'fixed' }}>

        </div>
        <div className="view" style={{backgroundImage: "url(https://mdbootstrap.com/img/Photos/Others/background.jpg)"}}>
          <div className="full-bg-img">
            <div className="mask rgba-purple-slight">
              <div className="container">
                <div className="d-flex align-items-center d-flex justify-content-center" style={{height: "700px"}}>
                  <div className="row mt-5">
                    <div className="col-md-12 wow fadeIn mb-3">
                      <div className="intro-info-content text-center">
                        <h1 className="display-1 white-text mb-2 wow fadeInDown">Lorem Ipsum</h1>
                        <h4 className="mb-3 mt-1 white-text font-weight-bold wow fadeIn">>Lorem ipsum dolor sit amet</h4>
                        <a className="btn btn-pink wow fadeIn">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-3">
              <h1 className="font-weight-bold pink-text mb-3">Lorem ipsum dolor sit amet, consectetur quis elit.</h1>
              <p align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
