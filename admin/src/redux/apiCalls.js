import { publicRequest } from "../adminRequestMethods";
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
