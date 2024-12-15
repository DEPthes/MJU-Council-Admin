import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyODE1NTYsImV4cCI6MTczNDI4MzM1Niwic3ViIjoic2kxNDQ0NCJ9.KgAfb29mgaaDtqfZXQFBrmLtb2QlIULWDBrGX_EewMU";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
