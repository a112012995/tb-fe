import { REAL_DATA, PREDICTED_DATA, KERENTANAN, INTERVENSI } from "../types";

const initialState = {
  dataReal: [],
  dataPredict: [],
  kerentanan: false,
  intervensi: false,
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
      case KERENTANAN:
      return {
        ...state,
        kerentanan: payload.kategori_kerentanan,
      };
      case INTERVENSI:
      return {
        ...state,
        intervensi: payload,
      };

    default:
      return state;
  }
};

export default predictReducers;
