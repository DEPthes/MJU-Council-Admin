import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyODc2NjYsImV4cCI6MTczNDI4OTQ2Niwic3ViIjoic2kxNDQ0NCJ9.l8UR0hZv_nERhmmtMjrckDg5MecbfH0ZsgXNzoVm8bA";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
