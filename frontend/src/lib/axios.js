import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-nests-api.vercel.app/api",
  withCredentials: true,
});
