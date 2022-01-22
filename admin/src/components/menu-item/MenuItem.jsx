import React from "react";
import "./menuItem.styles.css";
import { useLocation } from "react-router-dom";

function MenuItem({ children, ...props }) {
  const location = useLocation();
  const { pathname } = location;
  const currentPage = pathname.split("/");

  return (
    <div>
      <li
        className={
          "sidebarItemList " +
          (currentPage[1] === props.pathName ? "active" : "")
        }
      >
        <div className="sidebarIcon">{props.icon}</div>
        {children}
      </li>
    </div>
  );
}

export default MenuItem;
