import React from "react";
import "./css/ProjectSideMenu.css";
import { NavLink } from "react-router-dom";

function ProjectSideMenu() {
  const createNavLink = (upperMenu: string, index: string) => {
    return (
      <ul>
        <li>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to={`${upperMenu}/${index}/summary`}
          >
            - 개요
          </NavLink>
        </li>
        <li>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to={`${upperMenu}/${index}/view`}
          >
            - 화면
          </NavLink>
        </li>
        <li>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to={`${upperMenu}/${index}/code`}
          >
            - 코드
          </NavLink>
        </li>
      </ul>
    );
  };

  const renderUpperMenu = (to: string, title: string) => (
    <li>
      <NavLink
        className="upperMenu"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black",
        })}
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );

  return (
    <ul className="ProjectSideMenu">
      {renderUpperMenu("/project/about/", "프로젝트 소개")}
      {renderUpperMenu("/project/001/", "프로젝트 메뉴1")}
      {createNavLink("/project", "001")}
      {renderUpperMenu("/project/002/001", "프로젝트 메뉴2")}
      {createNavLink("/project", "002")}
    </ul>
  );
}

export default ProjectSideMenu;
