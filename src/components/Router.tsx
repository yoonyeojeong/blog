import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//import AboutPage from "./pages/About/AboutPage";
//import ContactPage from "./pages/Contact/ContactPage";
import StartPage from "../pages/fixed/StartPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/"
        >
          임시 링크
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
