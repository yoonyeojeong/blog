import React, { useState } from "react";
import "./css/ProfileBody.css";
import ProfileSideMenu from "./ProfileSideMenu";
import ProfileMain from "./ProfileMain";
import Header from "../../Layout/Header";
import ProfileAbout from "./pages/ProfileAbout";

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
        <ProfileSideMenu />
        {selectedContent}
      </div>
    </>
  );
}

export default ProfileBody;
