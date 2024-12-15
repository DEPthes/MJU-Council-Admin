import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyOTA2MzYsImV4cCI6MTczNDI5MjQzNiwic3ViIjoic2kxNDQ0NCJ9.PRoP26dM2lDJoRM900xC3xqbf1ghvgjyKr41PENJgyA";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
