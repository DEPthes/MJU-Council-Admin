import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyOTI3NzQsImV4cCI6MTczNDI5NDU3NCwic3ViIjoic2kxNDQ0NCJ9.8kKf8pa-L7qaLj20sr7dJGkFJojfIbCmHMjXVjsYzZM";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
