"use client"
import axios from "axios";

const axiosPublic = axios.create({
  // baseURL:"https://teamupserver.up.railway.app/",
  baseURL: "http://localhost:5000/",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
