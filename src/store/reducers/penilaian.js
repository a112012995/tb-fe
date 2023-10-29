import { CREATE_PENILAIAN } from "../types";

const initialState = {
  data: [],
};

const predictReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PENILAIAN:
      return {
        ...state,
        data: payload.data,
      };

    default:
      return state;
  }
};

export default predictReducers;
