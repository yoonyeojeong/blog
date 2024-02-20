import React from "react";
import "./css/ProjectSideMenu.css";
import { NavLink } from "react-router-dom";
import ListGroupItem from "../../components/ListGroupItem";
import styled from "@emotion/styled";

function ProjectSideMenu() {
  const SideStyle = styled.ul`
    max-width: 20%;
    min-width: 150px;
    text-align: left;
    list-style: none;
    margin-right: 5px;
    padding-left: 1%;
  `;
  const createNavLink = (upperMenu: string, index: string) => {
    return (
      <>
        <li>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to={`${upperMenu}/${index}/summary`}
          >
            - 개요
          </NavLink>
        </li>
        <li>
          <NavLink
            className="detailMenu"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              textDecoration: "none",
            })}
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
      </>
    );
  };

  const renderUpperMenu = (
    to: string,
    title: string,
    children: React.ReactNode
  ) => (
    <ListGroupItem>
      <ul style={{ margin: "0", padding: "0" }}>
        <NavLink
          className="upperMenu"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
          })}
          to={to}
        >
          <li>{title}</li>
        </NavLink>
        {children}
      </ul>
    </ListGroupItem>
  );

  return (
    <SideStyle className="list-group list-group-flush">
      {renderUpperMenu("/project/about/", "프로젝트 소개", <></>)}
      {renderUpperMenu("/project/new/", "새로운 방법", <></>)}
      {renderUpperMenu(
        "/project/001/",
        "프로젝트 메뉴1",
        createNavLink("/project", "001")
      )}
      {renderUpperMenu(
        "/project/002/001",
        "프로젝트 메뉴2",
        createNavLink("/project", "002")
      )}
    </SideStyle>
  );
}

export default ProjectSideMenu;
