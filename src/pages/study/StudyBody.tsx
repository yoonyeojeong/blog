import React from "react";
import "./css/StudyBody.css";
import Header from "../../Layout/Header";
import StudySideMenu from "./StudySideMenu";
import StudyMain from "./StudyMain";

function StudyBody() {
  return (
    <>
      <Header />
      <div id="StudyBodyLayout">
        <StudySideMenu />
        <StudyMain />
      </div>
    </>
  );
}

export default StudyBody;
