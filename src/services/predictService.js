import API from "./predictApi";

const PredictService = {

  realData: async function (id) {
    try {
      const response = await API.get(`api/v1/real-data/id=${id}`);
      return response;
    } catch (err) {
      console.log("predict service error", err);
      throw err;
    }
  },
  predictData: async function (id) {
    try {
      const response = await API.get(`api/v1/predicted-data/id=${id}`);
      return response;
    } catch (err) {
      console.log("predict service error", err);
      throw err;
    }
  },
};

export default PredictService;
