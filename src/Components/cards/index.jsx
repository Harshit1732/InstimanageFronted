import React from "react";
import "./style.css";
import build from "../../assets/building.png";
const Cards = () => {
  
  return (
    <div className="card_wrapper">
      <div className="card_container">
        <div>
          <div className="contain">
            <p style={{ color: "skyblue" }}>10</p>
            <p>New Exchange</p>
          </div>
          <img src={build} alt="build-img"
          style={{width:"70px", height:"65px",padding:"14px"}}
          />
        </div>
        <div>
        <div className="contain">
            <p style={{ color: "green" }}>25</p>
            <p>New Exchange</p>
          </div>
          <img src={build} alt="build-img"
          style={{width:"70px", height:"65px",padding:"14px"}}
          />
        </div>
        <div>

        <div className="contain">
            <p style={{ color: "red" }}>10</p>
            <p>New Exchange</p>
          </div>
          <img src={build} alt="build-img"
          style={{width:"70px", height:"65px",padding:"14px"}}
          />
        </div>
        <div>
        <div className="contain">
            <p style={{ color: "grey" }}>10</p>
            <p>New Exchange</p>
          </div>
          <img src={build} alt="build-img"
          style={{width:"70px", height:"65px",padding:"14px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
