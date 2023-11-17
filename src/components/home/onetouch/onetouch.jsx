import { Link } from 'react-router-dom';
import React, { Component, useEffect } from 'react';
import phone from '../../../asset/imgs/Ad_img.png'
import playstore from "../../../asset/imgs/play-store.webp";
import user from "../../../asset/imgs/user.png"
import trophy from "../../../asset/imgs/trophy.png"
import gift from "../../../asset/imgs/gift.png"
import location  from "../../../asset/imgs/location.png"
import heart from "../../../asset/imgs/heart.png"
import camera from "../../../asset/imgs/camera.png"
import NumberCounter from "./account"
import Prize from './prize';
import Gift from './gift';
import Location from './location';
import Camera from './camera';
import Heart from './heart';


class Onetouch extends Component {
  constructor() {
    super();
    this.state = {
      h1ContentIndex: 0,
      h1Contents: [
        "One Touch Cash",
        "24/7 Customer Support",
        "Technology Driven Company",
        "Multiple Customer Service Point",
        "Trusted by 6500+ Customers",
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeH1Content, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeH1Content = () => {
    this.setState((prevState) => {
      let newIndex = (prevState.h1ContentIndex + 1) % this.state.h1Contents.length;
      return { h1ContentIndex: newIndex };
    });
  };

  render() {
    const { h1Contents, h1ContentIndex } = this.state;

    return (
      <>
        <div className="wrapper1">
          <div className="container1">
           
            <h1>{h1Contents[h1ContentIndex]}</h1>
           
            <p>Your destination for Financial Guidance, Exclusive Schemes, Good Returns,Explicit Bidding, and many more money attraction</p>
            
               <button><Link className='link' to="/ContactMain">Call us</Link></button>
            
            <div className="store">             
            
              <div className="playstore">
                <img src={playstore} alt="" />
              </div>

              
            
            </div>
          </div>
          
          <div className="container2">
            <img src={phone} alt="" />
          </div>
          </div>

        <div className='icons'> 

        <div className="user cta-home-top-icon ">
             <img src= {user} alt="" />
              <NumberCounter />
             <p>Subscribers</p>
        </div>

        <div className="trophy cta-home-top-icon">
          <img src= {trophy} alt="" />
          <Prize  />
          <p>Prized Customers</p>
        </div>

        <div className="gift cta-home-top-icon">
        <img src= {gift} alt="" />
        <Gift />
        <p>Schemes</p>
        </div>

        <div className="heart cta-home-top-icon">
        <img src= {heart} alt="" />
        <Heart />
        <p>Dedicated Kinds</p>
        </div>

        <div className="location cta-home-top-icon">
        <img src= {location} alt="" />
        <Location />
        <p>Locations</p>
        </div>

        <div className="camera cta-home-top-icon">
        <img src= {camera} alt="" />
        <Camera />
        <p>Repeat Business</p>
        </div>

        </div>
      </>
    );
  }
}

export default Onetouch;
