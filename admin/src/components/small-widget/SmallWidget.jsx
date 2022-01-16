import React, { useState, useEffect } from "react";
import "./smallWidget.styles.css";
import { Visibility } from "@mui/icons-material";
import { adminRequest } from "../../adminRequestMethods";

function SmallWidget() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      try {
        const res = await adminRequest.get("/users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRes();
  }, []);
  return (
    <div className="smallWidget-container">
      <h3 className="smallWidget-title">New Memebers</h3>
      <ul className="smallWidget-list">
        {users.map((user) => (
          <li className="smallWidget-listItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="smWidget-img"
            />
            <div className="smWidget-userContainer">
              <span className="smWidget-username">{user.username}</span>
              <span className="smWidget-userSubtitle">{user.email}</span>
            </div>
            <button className="smallWidget-button ">
              <Visibility className="smWidget-icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SmallWidget;
