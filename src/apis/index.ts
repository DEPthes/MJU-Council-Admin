import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyODg3NDIsImV4cCI6MTczNDI5MDU0Miwic3ViIjoic2kxNDQ0NCJ9.LL5xWyJRqDVEGSnjTAZPu351xVZPUGL7hWP8Ww6tWFc";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
