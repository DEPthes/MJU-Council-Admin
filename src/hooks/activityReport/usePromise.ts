import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  getPromise,
  getPromiseCategory,
  postPromiseCategory,
} from "@/apis/ActivityReport/policy";
import {
  PromiseCategoryResponse,
  PromiseListResponse,
} from "@/types/ActivityReport/Policy/policy";

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

// ------------- {{ 정책 공약 }} ------------------------

export function usePromise(
  promiseTitle: string
): UseSuspenseQueryResult<PromiseListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetPromise"],
    queryFn: () => getPromise(promiseTitle),
  });
}
