import React, { useState } from "react";
import "./newUserPage.styles.css";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";
import { addCustomer } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

function NewUserPage() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [alertMsg, setAlertMsg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewCustomerClick = (e) => {
    e.preventDefault();

    addCustomer(dispatch, customerInfo);

    setAlertMsg(true);
    setTimeout(() => {
      setAlertMsg(false);
      navigate("/users");
    }, 2000);
  };

  const handleAddChange = (e) => {
    setCustomerInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="newUserPage-container">
      <h1 className="newUser-title">New User / Customer</h1>
      {alertMsg && (
        <div className="alert-container">
          <Alert className="alert-bar" severity="success">
            Product successfully added to live site!
          </Alert>
        </div>
      )}
      <form className="newUser-form">
        <div className="newUser-item">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="enter username"
            autoComplete="off"
            onChange={handleAddChange}
          />
        </div>
        <div className="newUser-item">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={handleAddChange}
          />
        </div>
        <div className="newUser-item">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your full name"
            onChange={handleAddChange}
          />
        </div>
        <div className="newUser-item">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone number is optional"
            onChange={handleAddChange}
          />
        </div>
        <div className="newUser-item">
          <label>Password</label>
          <input
            name="password"
            placeholder="enter a strong password"
            type="password"
            autoComplete="off"
            onChange={handleAddChange}
          />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input
            type="text"
            name="addresss"
            placeholder="Add one line Address"
            onChange={handleAddChange}
          />
        </div>

        <div className="newUser-item">
          <label>Status</label>
          <select
            className="newUserSelect"
            name="status"
            onChange={handleAddChange}
          >
            <option value={true}> Active</option>
            <option value={false}> Inactive</option>
          </select>
        </div>
        <button onClick={handleNewCustomerClick} className="newUserAdd-btn">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewUserPage;
