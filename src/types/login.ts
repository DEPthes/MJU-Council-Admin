export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  tokenType: "Bearer";
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: number;
}
