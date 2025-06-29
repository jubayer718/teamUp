"use client"
import axios from "axios";

const axiosPublic = axios.create({
  // baseURL:"http://localhost:5000",
  baseURL: "https://teamupserver-production.up.railway.app",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
