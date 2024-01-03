import React from "react";
import "./css/ProfileMain.css";
import ProfileAbout from "./pages/ProfileAbout";

function ProfileMain(selectedComponent: any) {
  return (
    <div id="ProfileMain">
      <ProfileAbout />
    </div>
  );
}

export default ProfileMain;
