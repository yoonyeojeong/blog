import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import MainBody from "../Layout/MainBody";
import HomeBody from "../pages/home/HomeBody";
import ProfileBody from "../pages/profile/ProfileBody";
import ProfileAbout from "../pages/profile/pages/ProfileAbout";
import ProjectBody from "../pages/project/ProjectBody";
import StudyBody from "../pages/study/StudyBody";
import MenuInfo from "../json/sidemenu.json";

export default function Router() {
  const menuInfo = MenuInfo.map((menuItem) => {
    const subject = menuItem["0"];
    const restOfValues = Object.values(menuItem).slice(1);

    return {
      subject,
      values: restOfValues,
    };
  });

  const findComponent = (subject: string, element: string) => {
    switch (subject) {
      case "profile":
        return <ProfileBody props={element} />;
      case "project":
        //<ProjectBody props={element}/>;
        break;
      case "study":
        break;
      default:
        break;
    }
  };

  var RouteComponentArray: JSX.Element[] = [];

  for (let i = 0; i < menuInfo.length; i++) {
    for (let j = 0; j < menuInfo[i].values.length; j++) {
      const routeComponent = menuInfo[i].subject.toLowerCase();
      const routePath = `/${menuInfo[i].subject.toLowerCase()}/${menuInfo[
        i
      ].values[j].toLowerCase()}`;
      const routeElement = menuInfo[i].values[j];
      console.log("routePath : ", routePath);
      console.log("routeElement", routeElement);

      // findComponent 함수를 호출하여 해당하는 컴포넌트를 얻어온 후, Route 컴포넌트의 element prop에 전달
      RouteComponentArray.push(
        <Route
          key={`${i}-${j}`}
          path={routePath}
          element={findComponent(routeComponent, routeElement)}
        />
      );
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/home/" element={<HomeBody />} />
        {RouteComponentArray}
        <Route path="/project/about/" element={<ProjectBody />} />
        <Route path="/study/about/" element={<StudyBody />} />
      </Routes>
    </BrowserRouter>
  );
}
