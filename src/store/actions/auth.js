import AuthService from "../../services/authServices";
import AuthSemarService from "../../services/semarBetul/authService";
import { LOGIN, LOGIN_SEMAR, LOGOUT, LOGOUT_SEMAR } from "../types";

export const login = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AuthService.login(params, history);
      dispatch({ type: LOGIN, payload: response.data });
      // history("/dashboard");
      // console.log(response)
    } catch (error) {
      //   console.log(error);
      throw error;
    }
  };

  export const loginSemar = (history) =>
    async function (dispatch) {
      try {
        const response = await AuthSemarService.login(history);
        dispatch({ type: LOGIN_SEMAR, payload: response.data });
        history("/dashboard");
        // console.log(response)
      } catch (error) {
        //   console.log(error);
        throw error;
      }
    };

  export const loginAdmin = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AuthService.loginAdmin(params, history);
      dispatch({ type: LOGIN, payload: response.data });
      history("/admin");
      // console.log(response)
    } catch (error) {
      //   console.log(error);
      throw error;
    }
  };

export const logout = (history) =>
  async function (dispatch) {
    try {
      AuthService.logout();
      dispatch({ type: LOGOUT });
      history("/")
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const logoutSemar = (history) =>
    async function (dispatch) {
      try {
        AuthSemarService.logout();
        dispatch({ type: LOGOUT_SEMAR });
        history("/")
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
