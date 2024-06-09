import SurveyService from "../../services/surveyServices";
import {
  CREATE_SURVEY, GET_ALL_SURVEY,
  GET_ALL_SURVEY_STAT,
  GET_CHART_SURVEY,
  GET_SURVEY_BY_ID_KEL
} from "../types";

export const createSurvey = (data) =>
  async function (dispatch) {
    try {
      const response = await SurveyService.createSurvey(data);
      dispatch({ type: CREATE_SURVEY, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  export const getSurveyByIdKel = (id) =>
  async function (dispatch) {
    try {
      const response = await SurveyService.getByIdKel(id);
      dispatch({ type: GET_SURVEY_BY_ID_KEL, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  export const getAllSurveyStatus = () =>
    async function (dispatch) {
      try {
        const response = await SurveyService.getAllSurveyStatus();
        dispatch({ type: GET_ALL_SURVEY_STAT, payload: response.data });
        // console.log(response)
        return response;
      } catch (error) {
        // console.log(error);
        throw error;
      }
    };

  export const getAllSurvey = () =>
  async function (dispatch) {
    try {
      const response = await SurveyService.getAllSurvey();
      dispatch({ type: GET_ALL_SURVEY, payload: response.data });
      // console.log(response)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  export const getChartSurvey = (id) =>
    async function (dispatch) {
      try {
        const response = await SurveyService.getChartSurvey(id);
        dispatch({ type: GET_CHART_SURVEY, payload: response.data });
        // console.log(response)
        return response;
      } catch (error) {
        // console.log(error);
        throw error;
      }
    };