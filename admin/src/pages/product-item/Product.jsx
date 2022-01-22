import React from "react";
import "./product.styles.css";
import { Link, useLocation } from "react-router-dom";
import { productItemData, productViews } from "../../tempData";
import Chart from "../../components/chart/Chart";
import BarChartBox from "../../components/bar-chart/BarChartBox";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
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
              src={product.img}
              alt={product.title}
              className="productItem-img"
            />
            <span className="productName">{product.title}</span>
          </div>

          <div className="productInfo-wrapper">
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">ID</span>
              <span className="productItem-info-value">
                {product._id.slice(0, 7)}
              </span>
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
              <span className="productItem-info-value">£{product.price}</span>
            </div>
            <div className="productItem-info-container">
              <span className="productItem-info-subtitle">Inventory</span>
              <span className="productItem-info-value">
                {product.inStock ? "in Stock" : "Out of stock"}
              </span>
            </div>
          </div>
        </div>
        <div className="productItem-bottomRight">
          <form className="productItem-form">
            <div className="productItem-formLeft">
              <label>Product Name</label>
              <input type="text" placeholder={product.title} />
              <label>Product Description</label>
              <input type="text" placeholder={product.desc} />
              <label>Price</label>
              <input type="text" placeholder={product.price} />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
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
                  src={product.img}
                  alt={product.title}
                  className="productItem-upload-img"
                />
                <label for="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productItem-updateBtn" disabled>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
