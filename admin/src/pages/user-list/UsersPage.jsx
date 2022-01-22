import React, { useEffect, useState } from "react";
import "./usersPage.styles.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";

function UsersPage() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.user.users);
  // const [userListData, setUserListData] = useState(UsersRows);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const Badge = ({ type }) => {
    return (
      <button className={"status-badge " + type.toString()}>
        {type === true ? "Active" : "Inactive"}
      </button>
    );
  };

  const handleUserDelete = (id) => {
    deleteUser(dispatch, id);

    // setUserListData(userListData.filter((item) => item.id !== id));
    // setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "username",
      headerName: "Username",
      width: 200,

      renderCell: (params) => {
        return (
          <div className="userRow-container">
            <img
              src={
                usersList.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt={params.row.username}
              className="userRow-img"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return <Badge type={params.row.status} />;
      },
    },
    // {
    //   field: "transactions",
    //   headerName: "Transaction",
    //   width: 160,
    //   align: "center",
    //   headerAlign: "center",
    // },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id + "/" + params.row.username}>
              <button className="userList-edit">Edit</button>
            </Link>
            <div>
              <DeleteOutline
                className="userList-iconDelete"
                onClick={() => handleUserDelete(params.row._id)}
              />
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div className="usersList-container">
      <div className="userTitle-container">
        <h1 className="singleUserTitle">Users </h1>
        <Link to="/new-user">
          <button className="userAddButton">Add new user</button>
        </Link>
      </div>
      {alert && (
        <div className="alert-container">
          <Alert className="alert-bar" severity="info">
            User successfully deleted!
          </Alert>
        </div>
      )}
      <DataGrid
        rows={usersList}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        getRowId={(row) => row._id}
        className="usersList-grid"
      />
    </div>
  );
}

export default UsersPage;
