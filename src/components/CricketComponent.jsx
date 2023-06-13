import React from "react";
import "./CricketComponent.css";

function CricketComponent({ item }) {

  return (
  
    <div className="main_div">
      <div className="child_div">
        <div className="first_row">
          <h2>{item.date}</h2>
          <h2>{item.matchType}</h2>
        </div>
        <div className="after_first_row">
          <h1>{item.name}</h1>
        </div>
        <div className="second_row">
          <img src={item.teamInfo[0].img} alt="images1" />
          <img src={item.teamInfo[0].img} alt="images2" />

        </div>

        <div className="third_row">
          <h2>{item.teams[0]}</h2> <h4 id='span'>VS</h4>
          <h2> {item.teams[1]}</h2>
        </div>

        <div className="forth_row">
          <h2>{item.status}</h2>
        </div>

        <div className="fifth_row">
          <h1>Venue:{item.venue}</h1>
        </div>
      </div>
    </div>
  );
}

export default CricketComponent;
