import React from "react";
import Header from "../../Layout/Header";
import ProjectMain from "./ProjectMain";
import ProjectSideMenu from "./ProjectSideMenu";
import "./css/ProjectBody.css";

function ProjectBody(props: any) {
  return (
    <>
      <Header />
      <div id="ProjectBodyLayout">
        <ProjectSideMenu />
        <ProjectMain />
      </div>
    </>
  );
}

export default ProjectBody;
