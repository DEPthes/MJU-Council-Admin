import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyODYzMDQsImV4cCI6MTczNDI4ODEwNCwic3ViIjoic2kxNDQ0NCJ9.lzDDdcNZS1iQp0McpDJZ_i7K0i4f2tJBJOgzP1_DR3U";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
