import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getPromise } from "@/apis/ActivityReport/policy";
import { PromiseListResponse } from "@/types/ActivityReport/Policy/policy";

// ------------- {{ 정책 공약 }} ------------------------

export function usePromise(
  promiseTitle: string
): UseSuspenseQueryResult<PromiseListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetPromise"],
    queryFn: () => getPromise(promiseTitle),
  });
}
