import axios from "axios";
import {
  GET_ALL_JOB_FAIL,
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
} from "../Constants/jobConstants";

export const getAllJobs =
  (search = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_JOB_REQUEST });

      let link = "https://xjob-mindx-production.up.railway.app/api/recruiments";
      if (search) {
        link = `https://xjob-mindx-production.up.railway.app/api/recruiments?search=${search}`;
        console.log(search);
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
