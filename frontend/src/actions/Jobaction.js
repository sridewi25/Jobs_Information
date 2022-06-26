import axios from "axios";

const GET_JOBS = "GET_JOBS";
const GET_JOBS_DETAIL = "GET_JOBS_DETAIL";

const getalljobs = (access_token) => {
    return (dispatch) => {
      // untuk loading
      dispatch({
        type: "GET_JOBS",
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
          dispatch({
            type: "GET_JOBS",
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_JOBS",
            payload: {
              loading: false,
              data: error.message,
              errorMessage: false,
            },
          });
        });
    };
  };

  const get_job_detail = (data,access_token) => {
    return (dispatch) => {
      // untuk loading
      console.log(access_token)
      dispatch({
        type: "GET_JOBS_DETAIL",
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      // get API
      axios({
        method: "GET",
        url: `http://localhost:3000/jobs/info/${data}`,
        timeout: 120000,
        headers: {
            Access_Token: access_token,
          },
        
      })
        .then((response) => {
          dispatch({
            type: "GET_JOBS_DETAIL",
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_JOBS_DETAIL",
            payload: {
              loading: false,
              data: error.message,
              errorMessage: false,
            },
          });
        });
    };
  };

export {
    GET_JOBS,GET_JOBS_DETAIL,getalljobs,get_job_detail
}