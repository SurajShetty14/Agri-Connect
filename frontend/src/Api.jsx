import axios from "axios";

const API = axios.create({
  baseURL:
    "https://agri-connect-r9kk.onrender.com" || "http://localhost:5000/api",
});
// Use the correct variable with the REACT_APP_ prefix

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
