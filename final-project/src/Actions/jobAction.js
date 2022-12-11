import axios from "axios";
import {
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_JOB_FAIL,
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
} from "../Constants/jobConstants";

export const getAllJobs =
  (search = "", createAt = "", deadline = "", defaults = "", id = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_JOB_REQUEST });

      let link = "https://xjob-mindx-production.up.railway.app/api/recruiments";
      if (search) {
        link = `https://xjob-mindx-production.up.railway.app/api/recruiments?search=${search}`;
      }
      if (createAt) {
        link = `https://xjob-mindx-production.up.railway.app/api/recruiments?fieldSort=${createAt}`;
      }
      if (deadline) {
        link = `https://xjob-mindx-production.up.railway.app/api/recruiments?fieldSort=${deadline}`;
      }
      if (defaults) {
        link = "https://xjob-mindx-production.up.railway.app/api/recruiments";
      }
      if (id) {
        link = `https://xjob-mindx-production.up.railway.app/api/recruiments?category=${id}`;
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
      `https://xjob-mindx-production.up.railway.app/api/users/category`
    );

    dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
