import React from "react";
import Cardimg from "../img/card.jpg";
import Cardimg2 from "../img/card2.jpg";
import Cardimg3 from "../img/card3.jpg";
import Cardimg4 from "../img/card4.jpg";
const Card = () => {
  return (
    <div className="card">
      <h1>See how businesses use Dukaan</h1>
      <div className="card-container">
        <div className="card-item">
          <div className="card-item-img">
            <img src={Cardimg} className="card-item-pic" />
          </div>
          <h2>vu store</h2>
          <p>Electronics</p>
        </div>
        <div className="card-item">
          <div className="card-item-img">
            <img src={Cardimg2} className="card-item-pic" />
          </div>
          <h2>gini & jony</h2>
          <p>Faishion & Apparels</p>
        </div>
        <div className="card-item">
          <div className="card-item-img">
            <img src={Cardimg3} className="card-item-pic" />
          </div>
          <h2>chai point</h2>
          <p>organic tea</p>
        </div>
        <div className="card-item">
          <div className="card-item-img">
            <img src={Cardimg4} className="card-item-pic" />
          </div>
          <h2>the nonsense store</h2>
          <p>games</p>
        </div>
      </div>
    </div>
  );
};
export default Card