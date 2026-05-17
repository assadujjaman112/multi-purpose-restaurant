import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error(
    "[env] VITE_API_URL is not set.\n" +
      "Add VITE_API_URL=http://localhost:5000 to your .env.local file and restart the dev server."
  );
}

const api = axios.create({ baseURL: API_URL });

export default api;
