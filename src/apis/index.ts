import axios from "axios";

const Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1hc3RlciIsImlhdCI6MTczNDM2MTMzMywiZXhwIjoxNzM0MzYzMTMzLCJzdWIiOiJtYXN0ZXIifQ.z30k-V9t-nangt72TuxPElOMvS-cOJjCLMMQxjuR0Dk";


export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
