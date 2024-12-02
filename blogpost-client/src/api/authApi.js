import axios from "axios";

const API_URL = "http://localhost:5000/auth";

const authAPI = axios.create({
    baseURL: API_URL,
    
});


export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default authAPI;
