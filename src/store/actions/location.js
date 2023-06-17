import locationService from "../../services/locationService"
import { GET_LOCATION,GET_LOCATION_BY_ID } from "../types"

export const getLocation = (params, history) =>
  async function (dispatch) {
    try {
      const response = await locationService.getLocation(params);
      dispatch({ type: GET_LOCATION, payload: response });
      // console.log(response)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getLocationById = (id) =>
  async function (dispatch) {
    try {
      const response = await locationService.getLocationById(id);
      dispatch({ type: GET_LOCATION_BY_ID, payload: response.data });
      // console.log(response)
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };