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
      "https://ecommerce-mindx.herokuapp.com/api/auth/login",
<<<<<<< HEAD
      { email, password },
      config
=======
      { email, password },config
>>>>>>> 16d9cd5d92ef5a06ffb100feae42ab93b8481333
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.msg);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
  }
};
