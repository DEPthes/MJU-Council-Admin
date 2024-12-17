import axios from "axios";

const Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1hc3RlciIsImlhdCI6MTczNDQ2MzM4MCwiZXhwIjoxNzM0NDY1MTgwLCJzdWIiOiJtYXN0ZXIifQ.u5tKKyWFC2qz4GUtJ_kPTT3I7eGL6fEXxgPPzvckuIg";


export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
