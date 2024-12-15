import { PromiseListResponse } from "@/types/ActivityReport/Policy/policy";
import axios from "axios";

const Authorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNpMTQ0NDQiLCJpYXQiOjE3MzQyNTQ3MTMsImV4cCI6MTczNDI1NjUxMywic3ViIjoic2kxNDQ0NCJ9.4cpiWx3AExXxoxCr6qSpWKGTNop7AT4QEsnwAZM-UQo";

// ------------- {{ 정책 카테고리 }} ------------------------

// 정책 카테고리 조회
export async function getPromiseCategory(): Promise<string[]> {
  const response = await axios.get(`/api/v1/promise-category`);

  return response?.data;
}

// 정책 카테고리 추가
export async function postPromiseCategory(
  promiseTitle: string
): Promise<string[]> {
  return await axios.post(
    `/api/v1/promise-category/${encodeURIComponent(promiseTitle)}`,
    {
      headers: {
        Authorization: `Bearer ${Authorization}`,
      },
    }
  );
}

// ------------- {{ 정책 공약 }} ------------------------

// 공약 목록 조회
export async function getPromise(
  promiseTitle: string
): Promise<PromiseListResponse> {
  const response = await axios.get(`/api/v1/promise-category/${promiseTitle}`);

  return response?.data;
}
