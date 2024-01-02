import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
        to="/profile"
      >
        Profile
      </NavLink>

      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
        to="/project"
      >
        Project
      </NavLink>

      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
        to="/study"
      >
        Study
      </NavLink>
    </>
  );
}
