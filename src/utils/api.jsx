import axios from "axios";

// Create and configure the Axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding authentication tokens (if needed)
API.interceptors.request.use(
  (config) => {
    // Example: Add an Authorization header if a token exists
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for global error handling
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle specific error statuses globally
    if (error.response?.status === 401) {
      console.error("Unauthorized access - please log in");
      // Example: Redirect to login
    }
    return Promise.reject(error);
  }
);

export default API;