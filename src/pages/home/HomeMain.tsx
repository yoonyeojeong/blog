import React from "react";
import "./css/HomeMain.css";
import logo from "../../logo.png";

function HomeMain() {
  return (
    <div id="HomeMainContent">
      <div>
        <h1>Welcome</h1> <br /> This is my blog and portfolio. <br /> You can
        check my MapleStory characters through the Photo card below.
        <br />
        <br />
        <a
          href="https://maple.gg/u/%EC%97%AC%EC%A0%95%EC%93%B0"
          target="_blank"
        >
          <img src={logo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default HomeMain;
