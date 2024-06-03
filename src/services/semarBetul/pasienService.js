import API from "./api";

const PasienService = {
  getPasienByIdKel: async function (id) {
    try {
      const response = await API.get(`/semarbetul/public/api/pasien?kelurahan=${id}`);
      return response;
    } catch (err) {
      // console.log("pasien service error", err);
      throw err;
    }
  },
}

export default PasienService