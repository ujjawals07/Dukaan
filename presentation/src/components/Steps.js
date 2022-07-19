import React from "react";
import Cart from "../img/store-person-1.jpg";
import SvgOne from "./SvgOne";

const Steps = () => {
  return (
    <section className="steps">
      <h6>Your dream business just three steps away!</h6>
      <div className="steps-container">
        <div className="steps-item">
          <div className="steps-item-content">
            <h1 className="step1">Step 1</h1>
            <h2>Name your store</h2>
            <p>
              The nights you’ve lost, the fights you’ve fought... to find the
              perfect name.
              <br /> Now is the time to make it happen. Name your store, choose
              a category and say a prayer.
            </p>
          </div>
          <div className="steps-item-img">
            <SvgOne />
          </div>
        </div>
        <div className="steps-item item2">
          <div className="steps-item-content content2">
            <h1 className="step2">Step 2</h1>
            <h2>Name your store</h2>
            <p>
              Bakery or boutique, art or apparel...now it’s time to sell. Let
              the world know what you have to offer. Add your products, set the
              price and wish you good luck!
            </p>
          </div>
          <div className="steps-item-img">
            <SvgOne />
          </div>
        </div>
        <div className="steps-item">
          <div className="steps-item-content">
            <h1 className="step3">Step 3</h1>
            <h2>Name your store</h2>
            <p>
              The moment of truth. The leap of faith. This is where it all
              begins. Your store is ready for the world. Start sharing and
              taking orders. Kaching!
            </p>
          </div>

          <div className="steps-item-img">
            <SvgOne />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Steps;
