import React, { PropsWithChildren } from "react";

function ListGroupItem({ children }: PropsWithChildren) {
  return <li className="list-group-item">{children}</li>;
}

export default ListGroupItem;
