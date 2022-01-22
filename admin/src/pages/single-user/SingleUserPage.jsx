import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./singleUser.styles.css";

function SingleUserPage() {
  return (
    <div className="userPage-container">
      <div className="userTitle-container">
        <h1 className="singleUserTitle">Edit User</h1>
        <Link to="/new-user">
          <button className="userAddButton">Add User</button>
        </Link>
      </div>
      <div className="singleUser-container">
        <div className="userShow">
          <div className="userShowTop">
            <img className="userShowImg" src="https://bit.ly/3GqErl2" alt="" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ayman A.</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">aymanio93</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">02-05-2000</span>
            </div>
            <span className="userShowTitle">Contact details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">079999944</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ayman@email.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">London | UK</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="aymanio"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Ayman A"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="ayman@email.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="079998383"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="address"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://bit.ly/3GqErl2"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingleUserPage;
