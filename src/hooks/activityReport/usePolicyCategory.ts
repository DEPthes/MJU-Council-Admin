import {
  deletePromiseCategory,
  getPromiseCategory,
  postPromiseCategory,
  putPromiseCategory,
} from "@/apis/ActivityReport/policy";
import { PromiseCategoryResponse } from "@/types/ActivityReport/policy";
import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

// ------------- {{ 정책 카테고리 }} ------------------------

export function usePromiseCategory(): UseSuspenseQueryResult<
  PromiseCategoryResponse,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetPromiseCategory"],
    queryFn: () => getPromiseCategory(),
  });
}

export function usePostPromiseCategory() {
  return useMutation<string[], Error, { promiseTitle: string }>({
    mutationFn: ({ promiseTitle }) => postPromiseCategory(promiseTitle),
  });
}

export function usePutPromiseCategory() {
  return useMutation<
    string[],
    Error,
    { promiseCategoryId: number; promiseTitle: string }
  >({
    mutationFn: ({ promiseCategoryId, promiseTitle }) =>
      putPromiseCategory(promiseCategoryId, promiseTitle),
  });
}

export function useDeletePromiseCategory() {
  return useMutation<string[], Error, { promiseCategoryId: number }>({
    mutationFn: ({ promiseCategoryId }) =>
      deletePromiseCategory(promiseCategoryId),
  });
}
