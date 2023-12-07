import { Link } from 'react-router-dom';
import React, { Component, useEffect } from 'react';
import Playstore from "../../../asset/imgs/play-store.webp"
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
import Imageslider from './imgslider'



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
            
               <button><Link className='link' to="/Product">Call us</Link></button>
            
            <div className="store">             
            

              {/* <div className="playstore">
               <img src={Playstore} alt="" />
              </div> */}

              
            
            </div>
          </div>
          
          <div className="container2">
          <Imageslider />
          </div>
          </div>

          <section className=" cta-list-top text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex cta-sub-list  text-center flex-row"> 
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <img src={user} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900"> <NumberCounter /></h2>
                    <p className="leading-relaxed">Subscribers</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <img src={trophy} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900"> <Prize /></h2>
                    <p className="leading-relaxed">Prized Customers</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <img src={gift} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900"><Gift /></h2>
                    <p className="leading-relaxed">Schemes</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <img src={heart} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900"><Heart /></h2>
                    <p className="leading-relaxed">Dedicated Kinds</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <img src={location} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900"><Location /></h2>
                    <p className="leading-relaxed">Locations</p>
                  </div>
                </div>

                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <img src={camera} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900"><Camera /></h2>
                    <p className="leading-relaxed">Repeat Business</p>
                  </div>
                </div>

              </div>
            </div>
          </section>


      </>
    );
  }
}

export default Onetouch;
