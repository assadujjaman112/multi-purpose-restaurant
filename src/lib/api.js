import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error(
    "[env] VITE_API_URL is not set — all API requests will fail.\n" +
      "Add VITE_API_URL=http://localhost:5000 to your .env.local file."
  );
}

const api = axios.create({ baseURL: API_URL });

export default api;
