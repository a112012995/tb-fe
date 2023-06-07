import axios from "axios";

const API = axios.create({
  baseURL: process.env(BE_URL),
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
