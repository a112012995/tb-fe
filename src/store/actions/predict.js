import predictService from "../../services/predictService";
import {
  PREDICTED_DATA,
  REAL_DATA,
} from "../types";

export const realData = (id) =>
  async function (dispatch) {
    try {
      const response = await predictService.realData(id);
      dispatch({ type: REAL_DATA, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const predictData = (id) =>
  async function (dispatch) {
    try {
      const response = await predictService.predictData(id);
      dispatch({ type: PREDICTED_DATA, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };