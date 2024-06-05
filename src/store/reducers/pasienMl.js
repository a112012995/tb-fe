import {
  GET_PASIEN_ML,
  GET_ALL_PASIEN_ML,
} from "../types";

const initialState = {
  pasienMlAll: false,
  pasienMlKel: "asu",
};

const pasienMlReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PASIEN_ML:
      return {
        ...state,
        pasienMlAll: payload,
      };
    case GET_PASIEN_ML:
      return {
        ...state,
        pasienMlKel: payload,
      };

    default:
      return state;
  }
};

export default pasienMlReducers;
