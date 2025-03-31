import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { API_MELI } from "@/constants/api";

const instance = axios.create({
  baseURL: API_MELI,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.MELI_ACCESS_TOKEN}`,
  },
});

const api = setupCache(instance, { location: "server" });

export default api;
