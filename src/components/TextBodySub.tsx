import React, { PropsWithChildren } from "react";

function TextBodySub({ children }: PropsWithChildren) {
  return (
    <div style={{ paddingLeft: "5px", marginBottom: "30px" }}>{children}</div>
  );
}

export default TextBodySub;
