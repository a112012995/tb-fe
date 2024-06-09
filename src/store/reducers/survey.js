import { CREATE_SURVEY, GET_ALL_SURVEY, GET_ALL_SURVEY_STAT, GET_CHART_SURVEY, GET_SURVEY_BY_ID_KEL } from "../types";

const initialState = {
  data: false,
  dataAll: [],
  dataStat:[],
  dataKel: false,
  survey: false,
};

const surveyReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_SURVEY:
      return {
        ...state,
        dataAll: payload,
      };
      case GET_ALL_SURVEY_STAT:
      return {
        ...state,
        dataStat: payload,
      };
    case CREATE_SURVEY:
      return {
        ...state,
        data: payload,
      };
    case GET_SURVEY_BY_ID_KEL:
      return {
        ...state,
        dataKel: payload,
      };

      case GET_CHART_SURVEY:
      return {
        ...state,
        survey: payload,
      };

    default:
      return state;
  }
};

export default surveyReducers;
