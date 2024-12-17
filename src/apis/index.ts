// import axios from "axios";

// const Token = sessionStorage.getItem("token");

// export const api = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   timeout: 2000,
//   headers: {
//     Authorization: `Bearer ${Token}`,
//   },
// });

import axios, { InternalAxiosRequestConfig } from "axios";

// 토큰 가져오기 함수
const getAccessToken = () => sessionStorage.getItem("token");
const getRefreshToken = () => sessionStorage.getItem("refreshToken");

// Axios 인스턴스 생성
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
});

// Request Interceptor: 요청 시 Access Token 자동 설정
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 로그인 요청일 경우 Authorization 헤더를 제외
    if (config.url && config.url.includes("/api/v1/users/login")) {
      delete config.headers.Authorization;
    } else {
      const token = getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Access Token 만료 시 Refresh Token으로 재발급
// api.interceptors.response.use(
//   (response) => response, // 정상 응답 시 그대로 반환
//   async (error) => {
//     const originalRequest = error.config;

//     // Access Token 만료 에러 (401) 확인 및 재시도 방지
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // 재시도 플래그 설정
//       try {
//         const refreshToken = getRefreshToken();
//         const refreshResponse = await axios.post(
//           `${import.meta.env.VITE_BASE_URL}/api/v1/users/refresh`,
//           { refreshToken }
//         );

//         const { accessToken, refreshToken: newRefreshToken } =
//           refreshResponse.data;

//         // 새로운 토큰을 sessionStorage에 저장
//         sessionStorage.setItem("token", accessToken);
//         sessionStorage.setItem("refreshToken", newRefreshToken);

//         // 실패한 요청에 새로운 Access Token 추가 후 재시도
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error("리프레시 토큰 만료:", refreshError);
//         // 리프레시 실패 시 로그아웃 처리
//         sessionStorage.removeItem("token");
//         sessionStorage.removeItem("refreshToken");
//         window.location.href = "/login"; // 로그인 페이지로 이동
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
