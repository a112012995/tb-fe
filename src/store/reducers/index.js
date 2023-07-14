import { combineReducers } from "redux";
import locationReducers from "./location";
import authReducers from "./auth";
import pasienReducers from "./pasien"

export default combineReducers({
  locationReducers,
  authReducers,
  pasienReducers
});
