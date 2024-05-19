import API from "./predictApi";

const SurveyService = {

  getAllSurvey: async function () {
    try {
      const response = await API.get(`api/v1/surveys`);
      return response;
    } catch (err) {
      // console.log("predict service error", err);
      throw err;
    }
  },

  getAllSurveyStatus: async function () {
    try {
      const response = await API.get(`api/v1/surveys/all/latest`);
      return response;
    } catch (err) {
      // console.log("predict service error", err);
      throw err;
    }
  },

  getByIdKel: async function (id) {
    try {
      const response = await API.get(`api/v1/surveys/${id}`);
      return response;
    } catch (err) {
      // console.log("predict service error", err);
      throw err;
    }
  },
  createSurvey: async function (data) {
    try {
      const response = await API.post(`api/v1/surveys/bulk`, data);
      return response;
    } catch (err) {
      // console.log("predict service error", err);
      throw err;
    }
  }
};

export default SurveyService;
