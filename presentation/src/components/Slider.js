import React, { Component } from "react";
import Slider from "react-slick";
import Blogimg from "../img/computer.png";
import Clothes from "../img/clothes.png";
import Jewelry from "../img/jewelry.png";
import Digital from "../img/digital.png";
import Food from "../img/food.png";
import Phone from "../img/phone.png";
import Shoes from "../img/shoes.png";
import Handmade from "../img/handmade.png";

class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <h2> The easiest way to sell anything online. </h2>
        <p>
          Start your brand new eCommerce store and impress your customers, with
          Dukaan!
        </p>
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Blogimg} className="slider-item-pic" />
              </div>
              <h1>Computer</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Clothes} className="slider-item-pic" />
              </div>
              <h1>sell clothes online</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Food} className="slider-item-pic" />
              </div>
              <h1>sell food online</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Jewelry} className="slider-item-pic" />
              </div>
              <h1>sell jewelry online</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Digital} className="slider-item-pic" />
              </div>
              <h1>sell digital online</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Phone} className="slider-item-pic" />
              </div>
              <h1>sell phone online</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Shoes} className="slider-item-pic" />
              </div>
              <h1>sell shoes online</h1>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item-box">
              <div className="slider-item-img">
                <img src={Handmade} className="slider-item-pic" />
              </div>
              <h1>sell handmade online</h1>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Responsive;
