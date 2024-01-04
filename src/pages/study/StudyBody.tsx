import React, { useEffect, useState } from "react";
import "./css/StudyBody.css";
import Header from "../../Layout/Header";
import StudySideMenu from "./StudySideMenu";
import StudyMain from "./StudyMain";
import Asp001 from "./pages/aboutCS/aboutASP/Asp001";
import Cs001 from "./pages/aboutCS/CS/cs001";
import CsMain from "./pages/aboutCS/CS/CsMain";
interface StudyBodyProps {
  props: string;
}

function StudyBody({ props }: StudyBodyProps) {
  const [component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const normalizedProps = props.toLowerCase();

    switch (normalizedProps) {
      case "aspnet":
        setComponent(<Asp001 />);
        break;
      case "cs":
        setComponent(<Cs001 />);
        break;
      case "csmain":
        setComponent(<CsMain />);
        break;
      default:
        setComponent(<StudyMain />);
        break;
    }
  }, [props]);

  return (
    <>
      <Header />
      <div className="StudyBodyLayout">
        <StudySideMenu />
        {component}
      </div>
    </>
  );
}

export default StudyBody;
