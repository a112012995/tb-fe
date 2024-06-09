import { GET_PASIEN_SEMAR_BY_ID_KEL } from "../types";

const initialState = {
  pasienSemarKel: [],
  loading: true,
};

const pasienSemarReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case GET_PASIEN_SEMAR_BY_ID_KEL:
      return {
        ...state,
        pasienSemarKel: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default pasienSemarReducers;
