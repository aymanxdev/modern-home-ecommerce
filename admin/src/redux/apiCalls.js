import { adminRequest, publicRequest } from "../adminRequestMethods";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "./productRedux";
import { loginStart, loginSuccess, loginFailure } from "./userRedux";

export const loginAdmin = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());

  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
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
