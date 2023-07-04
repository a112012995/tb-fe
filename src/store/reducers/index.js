import { combineReducers } from "redux";
import locationReducers from "./location";
import authReducers from "./auth";

export default combineReducers({
  locationReducers,
  authReducers
});
