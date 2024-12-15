import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyNzkwNzYsImV4cCI6MTczNDI4MDg3Niwic3ViIjoic2kxNDQ0NCJ9.ewy7iGO_FVHnp7w7o_jxCWx7RjoO0kdAF7KKkfWigso";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
