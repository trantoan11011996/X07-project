import {
  GET_ALL_JOB_FAIL,
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
} from "../Constants/jobConstants";

export const jobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case GET_ALL_JOB_REQUEST:
      return {
        jobs: [],
        loading: true,
      };
    case GET_ALL_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case GET_ALL_JOB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
