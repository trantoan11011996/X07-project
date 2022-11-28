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
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "https://xjob-mindx.herokuapp.com/api/users/login",
      { email, password },
      config
    );
    console.log(data);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
