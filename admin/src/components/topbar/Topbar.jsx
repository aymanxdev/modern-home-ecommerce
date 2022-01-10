import React from "react";
import "./topbar.styles.css";
import { NotificationsNoneOutlined } from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">Tiny Home Admin</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icons-container">
            <NotificationsNoneOutlined />
            <span className="topIcon-batch">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
