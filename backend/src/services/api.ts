import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const api = setupCache(instance, { location: "server" });

export default api;
