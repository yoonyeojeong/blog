import React from "react";
import "./css/StudySideMenu.css";
import { NavLink } from "react-router-dom";
import ListGroupItem from "../../components/ListGroupItem";

function StudySideMenu() {
  return (
    <ul id="StudySideMenu" className="list-group list-group-flush">
      <ListGroupItem>
        <ul style={{ margin: "0", padding: "0" }}>
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "blue" : "black",
              textDecoration: "none",
            })}
            to={"/study/aboutCS/main/"}
          >
            <li className="upperMenu">C#</li>
          </NavLink>
        </ul>
        <ul>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to={`/study/aboutCS/CS/001`}
          >
            <li className="detailMenu">- C#</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to={`/study/aboutCS/aspnet/001`}
          >
            <li className="detailMenu">- ASP.NET</li>
          </NavLink>
        </ul>
      </ListGroupItem>
      <ListGroupItem>임시 스터디 목록2</ListGroupItem>
      <ListGroupItem>임시 스터디 목록3</ListGroupItem>
      <ListGroupItem>임시 스터디 목록4</ListGroupItem>
      <ListGroupItem>임시 스터디 목록 5</ListGroupItem>
    </ul>
  );
}

export default StudySideMenu;
