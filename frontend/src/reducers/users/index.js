import { POST_USERS } from "../../actions/useraction";

const initialState = {
  addUsersResult: false,
  addUsersLoading: false,
  addUsersError: false,
};

const adduser = (state = initialState, action) => {
  switch (action.type) {
    case POST_USERS:
      return {
        ...state,
        addUsersResult: action.payload.data,
        addUsersLoading: action.payload.loading,
        addUsersError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default adduser;
