import React from "react";
import "./topbar.styles.css";
import {
  NotificationsNoneOutlined,
  GTranslateOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">Tiny Home Admin</span>
        </div>
        <div className="topbar-right">
          <div className="right-icons-container">
            <div className="topbar-icon-container">
              <NotificationsNoneOutlined />
              <span className="topIcon-badge">2</span>
            </div>
            <div className="topbar-icon-container">
              <GTranslateOutlined />
              <span className="topIcon-badge">2</span>
            </div>
            <div className="topbar-icon-container">
              <SettingsOutlined />
            </div>
            <img
              src="https://bit.ly/3GqErl2"
              alt="avatar"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
