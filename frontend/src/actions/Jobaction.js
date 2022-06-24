import axios from "axios";

const GET_DETAIL_JOB = "GET_DETAIL_JOB";
const GET_JOB_ALL = "GET_JOB_ALL";

const get_JOB_detail = (data,access_token) => {
  return (dispatch) => {
    // untuk loading
    console.log(data);
    dispatch({
      type: "GET_DETAIL_JOB",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: `http://localhost:3000/jobs/${data}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_DETAIL_JOB",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_DETAIL_JOB",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};
const getjob = (access_token) => {
  return (dispatch) => {
    console.log("2.")
    // untuk loading
    dispatch({
      type: "GET_JOB_ALL",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      
      method: "GET",
      url: "http://localhost:3000/jobs",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        console.log("3.")
        dispatch({
          type: "GET_JOB_ALL",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        
        dispatch({
          
          type: "GET_JOB_ALL",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};
export { GET_DETAIL_JOB, get_JOB_detail, GET_JOB_ALL, getjob };
