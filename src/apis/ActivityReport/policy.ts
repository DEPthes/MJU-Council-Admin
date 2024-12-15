import { PromiseListResponse } from "@/types/ActivityReport/Policy/policy";
import { api } from "..";
// ------------- {{ 정책 카테고리 }} ------------------------

// 정책 카테고리 조회
export async function getPromiseCategory(): Promise<string[]> {
  const response = await api.get(`/api/v1/promise-category`);

  return response?.data;
}

// 정책 카테고리 추가
export async function postPromiseCategory(
  promiseTitle: string
): Promise<string[]> {
  return await api.post(
    `/api/v1/promise-category/${encodeURIComponent(promiseTitle)}`
  );
}

export async function patchPromiseCategory(
  promiseCategoryId: number,
  promiseTitle: string
): Promise<string[]> {
  return await api.patch(
    `/api/v1/promise-category/${promiseCategoryId}/${encodeURIComponent(
      promiseTitle
    )}`
  );
}

export async function deletePromiseCategory(
  promiseCategoryId: number
): Promise<string[]> {
  return await api.delete(`/api/v1/promise-category/${promiseCategoryId}`);
}

// ------------- {{ 정책 공약 }} ------------------------

// 공약 목록 조회
export async function getPromise(
  promiseTitle: string
): Promise<PromiseListResponse> {
  const response = await api.get(`/api/v1/promise/${promiseTitle}`);

  return response?.data;
}
