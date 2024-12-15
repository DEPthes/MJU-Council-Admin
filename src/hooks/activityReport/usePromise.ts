import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getPromise, getPromiseCategory } from "@/apis/ActivityReport/policy";
import {
  PromiseCategoryResponse,
  PromiseListResponse,
} from "@/types/ActivityReport/Policy/policy";

export function usePromiseCategory(): UseSuspenseQueryResult<
  PromiseCategoryResponse,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetPromiseCategory"],
    queryFn: () => getPromiseCategory(),
  });
}

export function usePromise(
  promiseTitle: string
): UseSuspenseQueryResult<PromiseListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetPromise"],
    queryFn: () => getPromise(promiseTitle),
  });
}
