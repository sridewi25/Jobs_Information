import axios from "axios";

const POST_USERS = "POST_USERS";

const adduser = (data) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "POST_USERS",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "http://localhost:3000/users/register",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "POST_USERS",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "POST_USERS",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

export { adduser, POST_USERS };
