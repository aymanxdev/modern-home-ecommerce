import React from "react";
import "./product.styles.css";
import { Link } from "react-router-dom";
import { productItemData, productViews } from "../../tempData";
import Chart from "../../components/chart/Chart";
import BarChartBox from "../../components/bar-chart/BarChartBox";
import { Publish } from "@mui/icons-material";
function Product() {
  return (
    <div className="productItem-container">
      <div className="productTitle-container">
        <h1 className="productTitle">Product</h1>
        <Link to="/new-product">
          <button className="productItem-addBtn">Add Product</button>
        </Link>
      </div>
      <div className="productItem-top">
        <div className="productItem-topLeft">
          <Chart
            data={productItemData}
            dataKey="Sales"
            title="Product Sales"
            grid
          />
        </div>
        <div className="productItem-topRight">
          <BarChartBox
            data={productViews}
            dataKey="Active Sessions"
            title="Product Views"
            grid
          />
        </div>
      </div>
      <div className="productItem-bottom">
        <div className="productItem-bottomLeft">
          <div className="productItem-info-wrapper">
            <img
              src="https://bit.ly/3I3b1tG"
              alt="chair"
              className="productItem-img"
            />
            <span className="productName">Chair</span>
          </div>

          <div className="productInfo-wrapper">
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">ID</span>
              <span className="productItem-info-value">7373728</span>
            </div>
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">Sales</span>
              <span className="productItem-info-value">3000</span>
            </div>
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">Status</span>
              <span className="productItem-info-value">Active</span>
            </div>
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">Price</span>
              <span className="productItem-info-value">£299</span>
            </div>
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">Stock</span>
              <span className="productItem-info-value">Yes</span>
            </div>
          </div>
        </div>
        <div className="productItem-bottomRight">
          <form className="productItem-form">
            <div className="productItem-formLeft">
              <label>Product Name</label>
              <input type="text" placeholder="Chair" />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productItem-formRight">
              <div className="productItem-upload">
                <img
                  src="https://bit.ly/3I3b1tG"
                  alt=""
                  className="productItem-upload-img"
                />
                <label for="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productItem-updateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
