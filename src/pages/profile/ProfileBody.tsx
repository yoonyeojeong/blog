import React, { useState } from "react";
import "./css/ProfileBody.css";
import ProfileSideMenu from "./ProfileSideMenu";
import ProfileMain from "./ProfileMain";
import Header from "../../Layout/Header";
import ProfileAbout from "./pages/ProfileAbout";
import TempPage from "./pages/Temp";

function ProfileBody(props: any) {
  const [selectedComponent, setSelectedComponent] = useState(
    JSON.stringify(props["props"]).toLocaleLowerCase()
  );

  const changeComponent = (component: string) => {
    setSelectedComponent(component);
  };

  let selectedContent;

  switch (selectedComponent) {
    case '"about"':
      selectedContent = <ProfileMain />;
      break;
    default:
      selectedContent = null;
      break;
  }
  return (
    <>
      <Header />
      <div id="ProfileBodyLayout">
        <TempPage />
      </div>
    </>
  );
}

export default ProfileBody;
