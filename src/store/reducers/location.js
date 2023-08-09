import {
  GET_KELURAHAN_BY_ID,
  GET_KELURAHAN,
  GET_LOCATION,
  GET_LOCATION_BY_ID,
  GET_FASKES,
  GET_FASKES_BY_ID,
} from "../types";

const initialState = {
  data: [],
  dataKel:[],
  dataFas:[],
  dataById: false,
  dataKelId: false,
  dataFasId: false,
  totalPas: false,
  pasien: false,
  loading: true,
};

const locationReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LOCATION:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    case GET_LOCATION_BY_ID:
      return {
        ...state,
        dataById: payload.data,
        totalPas: payload.data.pasienbs.length,
        loading: false,
        pasien: payload.data.pasiens,
      };
    case GET_KELURAHAN:
      return {
        ...state,
        dataKel: payload.data,
        loading: false,
      };
    case GET_KELURAHAN_BY_ID:
      return {
        ...state,
        dataKelId: payload.data,
        loading: false,
      };
      case GET_FASKES:
      return {
        ...state,
        dataFas: payload.data,
        loading: false,
      };
    case GET_FASKES_BY_ID:
      return {
        ...state,
        dataFasId: payload.data,
        loading: false,
      };

    default:
      return state;
  }
};

export default locationReducers;
