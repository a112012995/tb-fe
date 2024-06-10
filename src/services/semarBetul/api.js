import axios from "axios";
// import store from "../store";

const API = axios.create({
  baseURL: process.env.REACT_APP_SB_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("semarToken") || ""}`,
  },
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }
  }
);

export default API;
