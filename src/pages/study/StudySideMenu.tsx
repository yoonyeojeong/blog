import React from "react";
import "./css/StudySideMenu.css";
import { NavLink } from "react-router-dom";
import ListGroupItem from "../../components/ListGroupItem";
import styled from "@emotion/styled";

function StudySideMenu() {
  const SideStyle = styled.ul`
    max-width: 40%;
    text-align: left;
    list-style: none;
    margin-right: 5px;
    padding-left: 1%;
  `;
  return (
    <SideStyle className="list-group list-group-flush">
      <ListGroupItem>
        <ul style={{ margin: "0", padding: "0" }}>
          <NavLink
            className="upperMenu"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "blue" : "black",
              textDecoration: "none",
            })}
            to={"/study/aboutCS/main/"}
          >
            <li>C#</li>
          </NavLink>
        </ul>
        <ul>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to={`/study/aboutCS/CS/001`}
          >
            <li>- C#</li>
          </NavLink>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to={`/study/aboutCS/aspnet/001`}
          >
            <li>- ASP.NET</li>
          </NavLink>
        </ul>
      </ListGroupItem>
      <ListGroupItem>임시 스터디 목록2</ListGroupItem>
      <ListGroupItem>임시 스터디 목록3</ListGroupItem>
      <ListGroupItem>임시 스터디 목록4</ListGroupItem>
      <ListGroupItem>임시 스터디 목록 5</ListGroupItem>
    </SideStyle>
  );
}

export default StudySideMenu;
