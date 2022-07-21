import React from "react";
import SvgThree from "./SvgThree";
import Logo2 from "../img/logo2.svg";
import Logo3 from "../img/logo3.svg";
import Logo4 from "../img/logo4.svg";
import Logo5 from "../img/logo5.svg";
import Logo6 from "../img/logo6.svg";
import Logo7 from "../img/logo7.svg";
import Logo9 from "../img/logo9.svg";
const Tools = () => {
  return (
    <section className="tools">
      <h6>E-commerce, made (incredibly) easy</h6>
      <div className="tools-container">
        <div className="tools-item">
          <SvgThree />
          <h1>Design tools</h1>
          <p>
            Make your store popular by designing amazing marketing materials
            from easy templates right within Dukaan.
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo2} className="tools-item-svg" />
          <h1> Restaurant dining </h1>
          <p>
            With Dukaan, get more customers to your business, by running an easy
            to use table booking service, for your restaurant.
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo3} className="tools-item-svg" />
          <h1> Unique themes</h1>
          <p>
            Make your store unique by choosing unique looks from a list of
            stunning themes and templates..
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo4} className="tools-item-svg" />
          <h1> Easy pages</h1>
          <p>
            Grow your online store by publishing custom pages, using easy to use
            templates, readily available.
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo5} className="tools-item-svg" />
          <h1> Custom domain</h1>
          <p>
            Make your store unique by getting your own custom domain name that
            is easy to remember.
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo6} className="tools-item-svg" />
          <h1> Online payments</h1>
          <p>
            Get more sales, by offering seamless and easy payment options on
            your online store with Dukaan.
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo7} className="tools-item-svg" />
          <h1> Addon plugins</h1>
          <p>
            Enhance your store with unique features and capabilities by choosing
            from a list of pre-built plugins.
          </p>
        </div>
        <div className="tools-item">
          <img src={Logo9} className="tools-item-svg" />
          <h1> Your own app</h1>
          <p>
            Get more loyal customers by getting your own mobile app and letting
            them buy directly from it
          </p>
        </div>
      </div>
    </section>
  );
};
export default Tools;
