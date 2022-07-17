import React from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import Cart from "../img/store-person-1.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Start selling online.</h1>
        <br />
        <p>
          Dukaan is the easiest way to start, run and grow your online business.
        </p>
        <button className="home-btn">Start 7-day free trial</button>
        <h2>
          Also available on <FaGooglePlay size={15} className="App" />
        </h2>
      </div>
      <div className="home-img">
        <img src={Cart} className="home-pic" />
      </div>
    </div>
  );
};
export default Home;
