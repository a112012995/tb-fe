import { GET_PASIEN, GET_PASIEN_BY_ID, GET_PASIEN_BY_ID_KEL } from "../types";

const initialState = {
  data: [],
  dataById: false,
  dataByIdKel: false,
  totalData: false,
  tbRecord: false,
  kelurahan: false,
  loading: true,
};

const locationReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PASIEN:
      return {
        ...state,
        data: payload.data.data,
        totalData: payload.data.totalData,
        loading: false,
      };
    case GET_PASIEN_BY_ID:
      return {
        ...state,
        dataById: payload.data,
        tbRecord: payload.data.tb_record,
        kelurahan: payload.data.kelurahan,
        loading: false,
      };

    case GET_PASIEN_BY_ID_KEL:
      return {
        ...state,
        dataByIdKel: payload.data,
        loading: false,
      };

    default:
      return state;
  }
};

export default locationReducers;
