import {
  PromiseInformation,
  PromiseListResponse,
  PromiseResponseInformation,
} from "@/types/ActivityReport/policy";
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

export async function putPromiseCategory(
  promiseCategoryId: number,
  promiseTitle: string
): Promise<string[]> {
  return await api.put(
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

// 공약 추가
export async function postPromise(
  promiseTitle: string,
  body: PromiseInformation
): Promise<{}> {
  console.log(promiseTitle);
  return await api.post(`/api/v1/promise/${promiseTitle}`, body);
}

// 공약 삭제
export async function deletePromise(promiseId: number): Promise<{}> {
  return await api.delete(`/api/v1/promise/${promiseId}`);
}

// 공약 수정
export async function putPromise(
  promise: PromiseResponseInformation
): Promise<{}> {
  const body = {
    title: promise.title,
    content: promise.content,
    progress: promise.progress,
  };
  return await api.put(`/api/v1/promise/${promise.promiseCategoryId}`, body);
}
