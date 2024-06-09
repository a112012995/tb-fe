import API from "./api";

const AuthSemar = {
  login: async (data) => {
    try {
      const response = await API.post(`/semarbetul/public/api/login?username=${process.env.REACT_APP_USER_SEMAR}&password=${process.env.REACT_APP_PASS_SEMAR}`);
      console.log(response);
      API.defaults.headers[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      setHeadersAndStorage(response.data.access_token);
      return response;
    } catch (err) {
      // console.log("Auth service error", err);
      throw err;
    }
  },

  logout: () => {
    API.defaults.headers["Authorization"] = "";
    localStorage.removeItem("semarToken");
  },
};

const setHeadersAndStorage = (semarToken) => {
    API.defaults.headers["Authorization"] = `Bearer ${semarToken}`;
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("roleId", roleId);
    localStorage.setItem("semarToken", semarToken);
  };

  export default AuthSemar;


