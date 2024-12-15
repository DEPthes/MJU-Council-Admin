import axios from "axios";

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRvb2dpIiwiaWF0IjoxNzM0MjY4MDE0LCJleHAiOjE3MzQyNjk4MTQsInN1YiI6ImRvb2dpIn0.LPZI9IO7oA3cg0FU8hvHBR6KCUzTc5xjoS3uODZugLE";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
