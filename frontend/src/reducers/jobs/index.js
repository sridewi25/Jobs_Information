import { GET_JOBS, GET_JOBS_DETAIL } from "../../actions/Jobaction";

const initialState = {
  getJobsResult: false,
  getJobsLoading: false,
  getJobsError: false,

  getJobsDetailResult: false,
  getJobsDetailLoading: false,
  getJobsDetailError: false,
};
const jobsUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        getJobsResult: action.payload.data,
        getJobsLoading: action.payload.loading,
        getJobsError: action.payload.errorMessage,
      };
      case GET_JOBS_DETAIL:
      return {
        ...state,
        getJobsDetailResult: action.payload.data,
        getJobsDetailLoading: action.payload.loading,
        getJobsDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default jobsUser;
