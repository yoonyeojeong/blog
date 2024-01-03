import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import StartPage from "../pages/fixed/StartPage";
import "./css/MainBody.css";

function MainBody() {
  return (
    <>
      <Header />
      <div className="Layout">
        <SideMenu />
        <StartPage />
      </div>
    </>
  );
}

export default MainBody;
