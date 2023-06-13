import React from "react";
import "./CricketComponent.css";

function CricketComponent({ item }) {
  console.log("Item is ", item);

  return (
    <div className="main_div" key={item.id}>
     
      <div className="child_div">
        <div className="super_child">
          <h1>Contest Name : {item.name} </h1>

          <h2>Competition : {item.matchType} </h2>

          <h3>Venue: {item.venue} </h3>
          <h4>Date: {item.date} </h4>

          <h3>Team: {item.teams} </h3>

          <h2>Result: {item.status} </h2>
        </div>
      </div>
    </div>
  );
}

export default CricketComponent;
