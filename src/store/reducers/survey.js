import { CREATE_SURVEY, GET_ALL_SURVEY, GET_SURVEY_BY_ID_KEL } from "../types";

const initialState = {
  data: false,
  dataAll: false,
  dataKel: false,
};

const surveyReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_SURVEY:
      return {
        ...state,
        dataAll: payload,
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

    default:
      return state;
  }
};

export default surveyReducers;
