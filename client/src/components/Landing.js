import React, { Component } from 'react';
import { Button } from 'antd';

class Landing extends Component {
  render() {
    const style = {
      parallax: {
        position: 'absolute',
        width: '100%',
        top: '60px',
        left: '0'
      },
      text: {
        color: 'white'
      },
      image: {
        backgroundImage: "url(/images/la.jpg)",
        backgroundAttachment: 'fixed',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      container: {
        marginTop: '150px',
        marginBottom: '150px'
      }
    }

    return (
      <div style={style.parallax}>
        <div className="container" style={style.container}>
          <div className="row">
            <div className="col-md-12 text-center mb-3">
              <h1 className="font-weight-bold light-blue-text my-3">Lorem ipsum dolor sit amet, consectetur quis elit.</h1>
              <p align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.</p>
              <Button type='primary' href='/login'>GO TO LOGIN</Button>
            </div>
          </div>
        </div>
        <div style={style.image}>
          <div className="container">
            <div className="col-md-12 text-center mb-3">
              <h1 className="font-weight-bold white-text my-3">Lorem ipsum dolor sit amet, consectetur quis elit.</h1>
              <p align="justify" style={style.text}>Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="container" style={style.container}>
            <div className="row">
              <div className="col-md-12 text-center my-3">
                <h1 className="font-weight-bold red-text mb-3">Lorem ipsum dolor sit amet, consectetur quis elit.</h1>
                <p align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
