import React, { PropsWithChildren } from "react";

function CodeBlock({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      {children}
    </div>
  );
}

export default CodeBlock;
