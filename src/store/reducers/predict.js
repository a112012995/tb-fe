import {
  REAL_DATA,
  PREDICTED_DATA,
  KERENTANAN,
  INTERVENSI,
  GET_KERENTANAN,
  GET_CASES_BY_ID,
} from "../types";

const initialState = {
  dataKerentanan: false,
  dataReal: [],
  dataPredict: [],
  kerentanan: false,
  intervensi: false,
  jumlahKasus: false,
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
    case GET_KERENTANAN:
      return {
        ...state,
        dataKerentanan: payload,
      };
    case INTERVENSI:
      return {
        ...state,
        intervensi: payload,
      };
    case GET_CASES_BY_ID:
      return {
        ...state,
        jumlahKasus: payload.jumlah_kasus,
      };

    default:
      return state;
  }
};

export default predictReducers;
