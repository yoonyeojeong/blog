import React from "react";
import Header from "../../Layout/Header";
import HomeMain from "./HomeMain";
import "./css/HomeBody.css";
import { useNavigate } from "react-router-dom";

function HomeBody() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/home/");
  }, [navigate]);
  return (
    <>
      <Header />
      <HomeMain />
    </>
  );
}

export default HomeBody;
