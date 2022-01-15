import React from "react";
import "./newProduct.styles.css";

const NewProduct = () => {
  return (
    <div className="newProduct-container">
      <h1 className="newProduct-title">New Product</h1>
      <form className="newProduct-form">
        <div className="newProduct-item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newProduct-item">
          <label>Product Name</label>
          <input type="text" placeholder="Enter product name" />
        </div>
        <div className="newProduct-item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newProduct-item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProduct-btn">Add Product</button>
      </form>
    </div>
  );
};

export default NewProduct;
