import API from "./predictApi";

const PredictService = {

  realData: async function (id) {
    try {
      const response = await API.get(`api/v1/real-data/id=${id}`);
      return response;
    } catch (err) {
      // console.log("predict service error", err);
      throw err;
    }
  },
  predictData: async function (id) {
    try {
      const response = await API.get(`api/v1/predicted-data/id=${id}`);
      return response;
    } catch (err) {
      // console.log("predict service error", err);
      throw err;
    }
  },

  kerentanan: async function (id) {
    try {
      const response = await API.get(`api/v1/vulnerability/id=${id}`);
      return response;
    } catch (err) {
      // console.log("kerentanan service error", err);
      throw err;
    }
  },
  getKerentanan: async function (data) {
    try {
      const response = await API.get(`api/v1/vulnerability`, data);
      return response;
    } catch (err) {
      // console.log("kerentanan service error", err);
      throw err;
    }
  },
  intervensi: async function (id) {
    try {
      const response = await API.get(`api/v1/interventions/${id}/list`);
      return response;
    } catch (err) {
      console.log("intervention service error", err);
      throw err;
    }
  },
  jumlahKasus: async function (id) {
    try {
      const response = await API.get(`api/v1/cases/id=${id}`);
      return response;
    } catch (err) {
      // console.log("intervention service error", err);
      throw err;
    }
  },
};

export default PredictService;
