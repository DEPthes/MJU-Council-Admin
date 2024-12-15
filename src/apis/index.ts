import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyNzgzMDUsImV4cCI6MTczNDI4MDEwNSwic3ViIjoic2kxNDQ0NCJ9.RcM97vnz0YXBhoTo_Et_98Z5gDDugTOfitH_0Kom9SI";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
