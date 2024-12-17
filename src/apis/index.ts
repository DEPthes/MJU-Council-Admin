import axios from "axios";

const Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1hc3RlciIsImlhdCI6MTczNDQ1NzE1MywiZXhwIjoxNzM0NDU4OTUzLCJzdWIiOiJtYXN0ZXIifQ.2bNuztakmdlUk-3nrUeOGyUB5Y7kM40kh-4-OY1ihd0";


export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
