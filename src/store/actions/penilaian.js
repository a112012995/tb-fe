import penilaianServices from "../../services/penilaianService";
import {
  CREATE_PENILAIAN,
//   GET_FASKES_BY_ID,

} from "../types";

export const createNilai = (params, history) =>
  async function (dispatch) {
    try {
      const response = await penilaianServices.createPenilaian(params);
      dispatch({ type: CREATE_PENILAIAN, payload: response.data });
      // console.log(response)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

// export const getFaskesById = (id) =>
//   async function (dispatch) {
//     try {
//       const response = await locationService.getFaskesById(id);
//       dispatch({ type: GET_FASKES_BY_ID, payload: response.data });
//       // console.log(response)
//       return response;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };
