import {
    GET_DETAIL_JOB,
    GET_JOB_ALL,
  } from "../../actions/Jobaction";
  
  const initialState = {
    getDetailjobResult: false,
    getDetailjobLoading: false,
    getDetailjobError: false,
  
    getjobResult: false,
    getjobLoading: false,
    getjobError: false,
  };
  
  const jobss = (state = initialState, action) => {
    switch (action.type) {
      case GET_DETAIL_JOB:
        return {
          ...state,
          getDetailjobResult: action.payload.data,
          getDetailjobLoading: action.payload.loading,
          getDetailjobError: action.payload.errorMessage,
        };
      case GET_JOB_ALL:
        return {
          ...state,
          getjobResult: action.payload.data,
          getjobLoading: action.payload.loading,
          getjobError: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default jobss;
  