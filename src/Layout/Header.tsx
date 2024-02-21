import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./css/Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const determineVariant = (menu: string) => {
    return location.pathname.includes(`/${menu}/`) ? "danger" : "primary";
  };

  return (
    <div className="HeaderBar">
      <Button
        variant={determineVariant("home")}
        className="HeaderMenu"
        onClick={() => navigate("/home/")}
      >
        Home
      </Button>

      <Button
        variant={determineVariant("profile")}
        className="HeaderMenu"
        onClick={() => navigate("/profile/about/")}
      >
        Profile
      </Button>

      <Button
        variant={determineVariant("project")}
        className="HeaderMenu"
        onClick={() => navigate("/project/new/")}
      >
        Project
      </Button>

      <Button
        variant={determineVariant("study")}
        className="HeaderMenu"
        onClick={() => navigate("/study/about/")}
      >
        Study
      </Button>
    </div>
  );
}

export default Header;
