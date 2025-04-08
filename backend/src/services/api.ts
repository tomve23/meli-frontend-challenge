import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0",
  },
});

const api = setupCache(instance, { location: "server" });

export default api;
