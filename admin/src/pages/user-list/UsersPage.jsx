import React, { useState } from "react";
import "./usersPage.styles.css";
import { DataGrid } from "@mui/x-data-grid";
import { UsersRows } from "../../tempData.js";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Alert from "@mui/material/Alert";

function UsersPage() {
  const [userListData, setUserListData] = useState(UsersRows);
  const [alert, setAlert] = useState(false);

  const handleUserDelete = (id) => {
    setUserListData(userListData.filter((item) => item.id !== id));
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      align: "right",

      renderCell: (params) => {
        return (
          <div className="userRow-container">
            <img
              src={params.row.avatar}
              alt={params.row.username}
              className="userRow-img"
            />
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "transactions",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id + "/" + params.row.username}>
              <button className="userList-edit">Edit</button>
            </Link>
            <div>
              <DeleteOutline
                className="userList-iconDelete"
                onClick={() => handleUserDelete(params.row.id)}
              />
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div className="usersList-container">
      {alert && (
        <div className="alert-container">
          <Alert className="alert-bar" severity="info">
            User successfully deleted!
          </Alert>
        </div>
      )}
      <DataGrid
        rows={userListData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}

export default UsersPage;
