import API from "./api";

const PenilaianService = {
  createPenilaian: async function (data) {
    try {
      const response = await API.post("/api/nilai/create", data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default PenilaianService;
