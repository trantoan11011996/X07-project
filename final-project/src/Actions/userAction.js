import axios from "axios";
import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
} from "../Constants/userConstant";
export const updatePassword = (dataPassword) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const data = await axios.put(
      "http://localhost:5000/api/v1/password/update",
      dataPassword
    );
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    toast.error(error.response.data);
  }
};
