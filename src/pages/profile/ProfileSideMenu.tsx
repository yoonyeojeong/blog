import React from "react";
import "./css/ProfileSideMenu.css";
import { useNavigate } from "react-router";
import MenuInfo from "../../json/sidemenu.json";

function ProfileSideMenu() {
  const navigate = useNavigate();
  const profileMenu = MenuInfo[0];
  const subject = profileMenu["0"];
  const values = Object.values(profileMenu).slice(1);
  const listItems = values.map((value, index) => (
    <li
      key={index}
      onClick={() => {
        navigate(`/${subject}/${value.toLocaleLowerCase()}`);
      }}
    >
      {value}
    </li>
  ));

  return <ul className="ProfileSideMenu">{listItems}</ul>;
}

export default ProfileSideMenu;
