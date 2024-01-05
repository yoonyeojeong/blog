import React, { PropsWithChildren } from "react";

function TextBodyMain({ children }: PropsWithChildren) {
  return <div style={{ marginBottom: "30px" }}>{children}</div>;
}

export default TextBodyMain;
