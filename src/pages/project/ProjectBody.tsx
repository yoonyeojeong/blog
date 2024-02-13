import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import ProjectMain from "./ProjectMain";
import ProjectSideMenu from "./ProjectSideMenu";
import Project001Summary from "./pages/001/Project001Summary";
import Project001View from "./pages/001/Project001View";
import Project001Code from "./pages/001/Project001Code";

interface ProjectBodyProps {
  props: string;
}

function ProjectBody({ props }: ProjectBodyProps) {
  const [component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const normalizedProps = props.toLowerCase();

    switch (normalizedProps) {
      case "001summary":
        setComponent(<Project001Summary />);
        break;
      case "001view":
        setComponent(<Project001View />);
        break;
      case "001code":
        setComponent(<Project001Code />);
        break;
      default:
        setComponent(<ProjectMain />);
        break;
    }
  }, [props]);

  return (
    <>
      <Header />
      <div id="ProjectBodyLayout">{component}</div>
    </>
  );
}

export default ProjectBody;
