import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyOTM3NDcsImV4cCI6MTczNDI5NTU0Nywic3ViIjoic2kxNDQ0NCJ9.TZCvHjhtYgP3xr7KllMvsU9twJrdpLQRo91yeWO51Tg";


export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
