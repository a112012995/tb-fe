import API from "./api";

const LocationService = {
  getLocation: async function (data) {
    try {
      const response = await API.get("/api/location", data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getLocationById: async function (id) {
    try {
      const response = await API.get(`/api/location/${id}`);
      return response;
    } catch (err) {
      console.log("location service error", err);
      throw err;
    }
  },
}

export default LocationService