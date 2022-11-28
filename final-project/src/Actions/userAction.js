import axios from "axios";
import { toast } from "react-toastify";
import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "../Constants/userConstant";
export const updatePassword = (dataPassword) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const data = await axios.put(
      "https://xjob-mindx.herokuapp.com/api/users/updatepassword",
      dataPassword
    );
    console.log(data);
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    toast.error(error.response.data);
    dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.response.data });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.post(
      "https://xjob-mindx.herokuapp.com/api/users/forgotpassword",
      { email },
      config
    );
    toast.success("Vui lòng kiểm tra email của bạn !");
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    toast.error("Email không tồn tại trong hệ thống !");
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
