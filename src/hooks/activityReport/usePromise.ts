import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  deletePromise,
  getPromise,
  postPromise,
  putPromise,
} from "@/apis/ActivityReport/policy";
import {
  PromiseInformation,
  PromiseListResponse,
  PromiseResponseInformation,
} from "@/types/ActivityReport/policy";

// ------------- {{ 정책 공약 }} ------------------------

export function usePromise(
  promiseTitle: string
): UseSuspenseQueryResult<PromiseListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetPromise"],
    queryFn: () => getPromise(promiseTitle),
  });
}

export function usePostPromise() {
  return useMutation<
    {},
    Error,
    { promiseTitle: string; body: PromiseInformation }
  >({
    mutationFn: ({ promiseTitle, body }) => postPromise(promiseTitle, body),
  });
}

export function useDeletePromise() {
  return useMutation<{}, Error, { promiseId: number }>({
    mutationFn: ({ promiseId }) => deletePromise(promiseId),
  });
}

export function usePutPromise() {
  return useMutation<{}, Error, { promise: PromiseResponseInformation }>({
    mutationFn: ({ promise }) => putPromise(promise),
  });
}
