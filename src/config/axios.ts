import axios from "axios";

/**
 * set the axios configurations so that you can send HTTP requests
 * to json-server.
 */

const BASE_URL = "http://localhost:4000/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export default api;
