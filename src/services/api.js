import axios from "axios";

const API_URL = "${import.meta.env.VITE_API_BASE_URL}/api/users"; // your backend URL

export const registerUser = async (userData) => {
  try {
    console.log(userData, "llllll");
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const { token, role, email } = response.data;

    // return normalized object
    return { token, role, email };
  } catch (error) {
    throw error.response?.data || error;
  }
};
