import { LoginRequest, LoginResponse } from "@/types/login";
import { api } from ".";

// 로그인
export async function postLogin(body: LoginRequest): Promise<LoginResponse> {
  const response = await api.post(`/api/v1/users/login`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
