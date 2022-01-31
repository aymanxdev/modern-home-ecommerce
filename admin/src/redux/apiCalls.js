import { adminRequest, publicRequest } from "../adminRequestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  addUserStart,
  addUserFailure,
  addUserSuccess,
} from "./userRedux";

/////////////////////////////////////////// Login /////////////////////////////////////////////

export const loginAdmin = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

// GET ALL Products

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());

  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

// ADD NEW PRODUCT TO DB

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await adminRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure);
    console.log(error);
  }
};

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());

  try {
    // in case want to delete from DB
    // const res = await adminRequest.delete(`/products/${id}`)
    // dispatch(deleteProductSuccess(res.data))

    // for testing purposes, will only delete from the frontend
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
    console.log(error);
  }
};

// UPDATE PRODUCT

export const updateProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());

  try {
    const res = await adminRequest.put(`/products/update/${id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

////////////////////////////////////////// USERS /////////////////////////////////////////

//////// USERS ASYNC CALLS

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());

  try {
    const res = await adminRequest.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailure());
    console.log(error);
  }
};

// ADD USER

export const addCustomer = async (dispatch, customer) => {
  dispatch(addUserStart());

  try {
    const res = await adminRequest.post("/auth/register/", customer);
    dispatch(addUserSuccess(res.data));
  } catch (error) {
    dispatch(addUserFailure());
    console.log(error);
  }
};

/// DELETE USER

export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());

  try {
    // const res = await adminRequest.delete(`/users/${id}`)
    // dispatch(deleteUserSuccess(res.data))

    // for testing purposes, will only delete from the frontend
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
    console.log(error);
  }
};
