import AuthService from "../../services/authServices"
import { LOGIN, } from "../types"

export const login = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AuthService.login(params, history);
      dispatch({ type: LOGIN, payload: response.data });
      history("/dashboard")
      // console.log(response)
    } catch (error) {
    //   console.log(error);
      throw error;
    }
  };
