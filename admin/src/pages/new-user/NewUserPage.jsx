import React from "react";
import "./newUserPage.styles.css";

function NewUserPage() {
  return (
    <div className="newUserPage-container">
      <h1 className="newUser-title">New User</h1>
      <form className="newUser-form">
        <div className="newUser-item">
          <label>Username</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUser-item">
          <label>Email</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUser-item">
          <label>Name</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUser-item">
          <label>Phone</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUser-item">
          <label>Password</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUser-item">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUser-item">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserAdd-btn">Create</button>
      </form>
    </div>
  );
}

export default NewUserPage;
