import { postLogin } from "@/apis/login";
import { LoginRequest, LoginResponse } from "@/types/login";
import { useMutation } from "@tanstack/react-query";

export function usePostLogin() {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (body) => postLogin(body),
  });
}
