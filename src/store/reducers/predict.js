import {
    REAL_DATA,
    PREDICTED_DATA,
  } from "../types";
  
  const initialState = {
    dataReal: [],
    dataPredict:[],
  };
  
  const predictReducers = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REAL_DATA:
        return {
          ...state,
          dataReal: payload,
        };
        case PREDICTED_DATA:
        return {
          ...state,
          dataPredict: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default predictReducers;
  