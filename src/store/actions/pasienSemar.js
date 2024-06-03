import PasienService from "../../services/semarBetul/pasienService";
import { GET_PASIEN_SEMAR_BY_ID_KEL } from "../types";

export const getPasienByIdKel = (id) =>
  async function (dispatch) {
    try {
      const response = await PasienService.getPasienByIdKel(id);
      dispatch({ type: GET_PASIEN_SEMAR_BY_ID_KEL, payload: response.data.data });
    //   console.log(response.data.data)
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };
