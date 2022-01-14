import React from "react";
import "./smallWidget.styles.css";
import { Visibility } from "@mui/icons-material";

function SmallWidget() {
  return (
    <div className="smallWidget-container">
      <h3 className="smallWidget-title">New Memebers</h3>
      <ul className="smallWidget-list">
        <li className="smallWidget-listItem">
          <img
            src="https://tinyurl.com/57fajy6h"
            alt=""
            className="smWidget-img"
          />
          <div className="smWidget-userContainer">
            <span className="smWidget-username">Ayman</span>
            <span className="smWidget-userSubtitle">Software Engineer</span>
          </div>
          <button className="smallWidget-button ">
            <Visibility className="smWidget-icon" />
            Display
          </button>
        </li>
        <li className="smallWidget-listItem">
          <img
            src="https://tinyurl.com/57fajy6h"
            alt=""
            className="smWidget-img"
          />
          <div className="smWidget-userContainer">
            <span className="smWidget-username">Ayman</span>
            <span className="smWidget-userSubtitle">Software Engineer</span>
          </div>
          <button className="smallWidget-button ">
            <Visibility className="smWidget-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SmallWidget;
