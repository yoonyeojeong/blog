import React from "react";
import "./css/StudySideMenu.css";
import { NavLink } from "react-router-dom";

function StudySideMenu() {
  return (
    <ul id="StudySideMenu">
      <li>
        <NavLink
          className="upperMenu"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
          })}
          to={"/study/aboutCS/main/"}
        >
          C#
        </NavLink>
        <ul>
          <li>
            <NavLink
              className="detailMenu"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              to={`/study/aboutCS/CS/001`}
            >
              - C#
            </NavLink>
          </li>
          <li>
            <NavLink
              className="detailMenu"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              to={`/study/aboutCS/aspnet/001`}
            >
              - ASP.NET
            </NavLink>
          </li>
        </ul>
      </li>
      <li>임시 스터디 목록2</li>
      <li>임시 스터디 목록3</li>
      <li>임시 스터디 목록4</li>
    </ul>
  );
}

export default StudySideMenu;
