import React from "react";
import "./menuItem.styles.css";

function MenuItem({ children, ...props }) {
  return (
    <div>
      <li className={"sidebarItemList " + (props.active ? "active" : "")}>
        <div className="sidebarIcon">{props.icon}</div>
        {children}
      </li>
    </div>
  );
}

export default MenuItem;
