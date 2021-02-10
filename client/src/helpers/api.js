const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // config.headers["Authorization"] = `Token ${token}`;
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;