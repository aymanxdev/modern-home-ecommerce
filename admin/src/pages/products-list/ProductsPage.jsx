import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ProductsRows } from "../../tempData.js";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Alert from "@mui/material/Alert";

import "./productsList.styles.css";

function ProductsPage() {
  const [ProductsListData, setProductsListData] = useState(ProductsRows);
  const [alert, setAlert] = useState(false);
  const handleProductDelete = (id) => {
    setProductsListData(ProductsListData.filter((item) => item.id !== id));
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "img",
      headerName: "Image",
      width: 70,
      renderCell: (params) => {
        return (
          <div className="productRow-container">
            <img
              src={params.row.img}
              alt={params.row.productName}
              className="productRow-img"
            />
          </div>
        );
      },
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 200,
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id + "/" + params.row.username}>
              <button className="productsList-edit">Edit</button>
            </Link>
            <div>
              <DeleteOutline
                className="productsList-iconDelete"
                onClick={() => handleProductDelete(params.row.id)}
              />
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div className="productsPage-container">
      <div className="productTitle-container">
        <h1 className="productTitle">Products </h1>
        <Link to="/new-product">
          <button className="productItem-addBtn">Add Product</button>
        </Link>
      </div>

      {alert && (
        <div className="alert-container">
          <Alert className="alert-bar" severity="info">
            Product successfully deleted!
          </Alert>
        </div>
      )}
      <DataGrid
        rows={ProductsListData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        className="productsList-grid"
      />
    </div>
  );
}

export default ProductsPage;
