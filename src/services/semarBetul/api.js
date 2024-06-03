import axios from "axios";
// import store from "../store";

const API = axios.create({
  baseURL: "http://119.2.50.170:9093",
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
