import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-y60n.onrender.com/api",
});

export default api;