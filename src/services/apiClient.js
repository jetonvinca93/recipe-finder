import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "7b195cba54e34b46b1e214a8b7e8474a",
  },
});

export default api;
