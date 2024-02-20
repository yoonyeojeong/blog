import React from "react";
import "./css/HomeMain.css";
import logo from "../../logo.png";
import Hello from "./profile.jpeg";

function HomeMain() {
  return (
    <div id="HomeMainContent">
      <div>
        <img src={Hello} alt="" />
        <h1>Welcome</h1> <br /> This is my blog and portfolio.
      </div>
    </div>
  );
}

export default HomeMain;
