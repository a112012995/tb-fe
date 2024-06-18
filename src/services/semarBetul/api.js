import axios from "axios";
import { logout } from "../../store/actions/auth";
import store from "../../store";

const API = axios.create({
  baseURL: process.env.REACT_APP_SB_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("semarToken") || ""}`,
  },
});

// Pass location as an argument to the interceptor function
const interceptor = (err, location) => {
  console.log(err);
  if (err.response.status === 401) {
    store.dispatch(logout(location));
    throw err;
  }
};

API.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  async (err) => {
    // Pass the location information to the interceptor function
    interceptor(err, window.location.assign("/"));
  }
);

export default API;
