import React, { useState } from "react";
import "./newProduct.styles.css";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
const NewProduct = () => {
  const [alert, setAlert] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [inputData, setInputData] = useState({});
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategory = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const imageFileName = new Date().getTime() + imgFile.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, imageFileName);
    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputData,
            img: downloadURL,
            categories: category,
          };
          console.log(product);
          addProduct(product, dispatch);
        });
      }
    );
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);

    setInputData({});
  };

  return (
    <div className="newProduct-container">
      <h1 className="newProduct-title">New Product</h1>
      {alert && (
        <div className="alert-container">
          <Alert className="alert-bar" severity="success">
            Product successfully added to live site!
          </Alert>
        </div>
      )}
      {error && (
        <div className="alert-container">
          <Alert className="alert-bar" severity="error">
            Error {error}
          </Alert>
        </div>
      )}
      <form className="newProduct-form">
        <div className="newProduct-item">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setImgFile(e.target.files[0])}
          />
        </div>
        <div className="newProduct-item">
          <label>Product Name</label>
          <input
            name="title"
            type="text"
            placeholder="Enter product name"
            onChange={handleChange}
          />
        </div>
        <div className="newProduct-item">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="Description..."
            onChange={handleChange}
          />
        </div>
        <div className="newProduct-item">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="Enter product price"
            onChange={handleChange}
          />
        </div>
        <div className="newProduct-item">
          <label>Categories</label>
          <input
            type="text"
            placeholder="Enter category name separated by comma "
            onChange={handleCategory}
          />
        </div>
        <div className="newProduct-item">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleAddClick} className="newProduct-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
