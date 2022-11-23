import { toast } from "react-toastify";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../Constants/authConstant";
import axios from "axios";
export const loginUser = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.post(
      `https://ecommerce-mindx.herokuapp.com/api/auth/login`,
      { email, password },
      config
    );
    navigate("/");
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    toast.error(error.response.data.msg);
  }
};
