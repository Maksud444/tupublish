import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://test1-iota-lilac.vercel.app/api", 
  withCredentials: true, 
});

//  token 
newRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("Token:", token); // Debugging  token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default newRequest;
