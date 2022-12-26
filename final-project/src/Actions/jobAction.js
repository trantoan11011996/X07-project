import axios from "axios";
import {
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_JOB_FAIL,
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
} from "../Constants/jobConstants";
import { getApiHost } from "../config";
export const getAllJobs =
  (search = "", createAt = "", deadline = "", defaults = "", id = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_JOB_REQUEST });

      let link = getApiHost() + "recruiments";
      if (search) {
        link = getApiHost() + `recruiments?search=${search}`;
      }
      if (createAt) {
        link = getApiHost() + `recruiments?fieldSort=${createAt}`;
      }
      if (deadline) {
        link = getApiHost() + `recruiments?fieldSort=${deadline}`;
      }
      if (defaults) {
        link = getApiHost() + "recruiments";
      }
      if (id) {
        link = getApiHost() + `recruiments?category=${id}`;
      }
      const { data } = await axios.get(link);
      dispatch({ type: GET_ALL_JOB_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_JOB_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getAllJobCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_REQUEST });

    const { data } = await axios.get(
      getApiHost() + `users/category`
    );

    dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
