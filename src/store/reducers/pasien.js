import { GET_PASIEN, GET_PASIEN_BY_ID, GET_PASIEN_BY_ID_KEL } from "../types";

const initialState = {
  data: [],
  dataById: false,
  dataByIdKel: false,
  record: false,
  loading: true,
};

const locationReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PASIEN:
      return {
        ...state,
        data: payload.data,
        // record: payload.data.tb_record,
        loading: false,
      };
    case GET_PASIEN_BY_ID:
      return {
        ...state,
        dataById: payload.data,
        record: payload.data.tb_record,
        loading: false,
      };

    case GET_PASIEN_BY_ID_KEL:
      return {
        ...state,
        dataByIdKel: payload.data,
        // record: payload.data,
        loading: false,
      };

    default:
      return state;
  }
};

export default locationReducers;
