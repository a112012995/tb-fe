import predictService from "../../services/predictService";
import {
  PREDICTED_DATA,
  REAL_DATA,
  KERENTANAN,
  INTERVENSI,
  GET_KERENTANAN,
  GET_CASES_BY_ID,
  GET_KELURAHAN_ML
} from "../types";

export const realData = (id) =>
  async function (dispatch) {
    try {
      const response = await predictService.realData(id);
      dispatch({ type: REAL_DATA, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
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
      // console.log(error);
      throw error;
    }
  };

  export const getKerentanan = (id) =>
  async function (dispatch) {
    try {
      const response = await predictService.kerentanan(id);
      dispatch({ type: KERENTANAN, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  export const getAllKerentanan = (params, history) =>
  async function (dispatch) {
    try {
      const response = await predictService.getKerentanan(params);
      dispatch({ type: GET_KERENTANAN, payload: response.data });
      // console.log(response)
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  export const getIntervention = (id) =>
  async function (dispatch) {
    try {
      const response = await predictService.intervensi(id);
      dispatch({ type: INTERVENSI, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };
  export const getCasesById = (id) =>
  async function (dispatch) {
    try {
      const response = await predictService.jumlahKasus(id);
      dispatch({ type: GET_CASES_BY_ID, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  export const getKelurahanMl = (id) =>
    async function (dispatch) {
      try {
        const response = await predictService.getKelurahanMl(id);
        dispatch({ type: GET_KELURAHAN_ML, payload: response.data });
        console.log(response)
        return response;
      } catch (error) {
        // console.log(error);
        throw error;
      }
    };