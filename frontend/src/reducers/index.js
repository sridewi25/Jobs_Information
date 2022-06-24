import jobReducer from "./jobs";
import userReducer from "./users";
import { combineReducers } from "redux";

export default combineReducers({
  jobReducer,
  userReducer,
});
