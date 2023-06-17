import { GET_LOCATION, GET_LOCATION_BY_ID } from "../types";

const initialState = {
  data: [],
  dataById: false,
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
        loading: false,
      };

    default:
      return state;
  }
};

export default locationReducers;
