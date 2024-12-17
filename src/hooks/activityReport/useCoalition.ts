import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  deleteAllCoalition,
  deleteCoalition,
  getCoalitionDetail,
  getCoalitionList,
  postCoalition,
} from "@/apis/ActivityReport/coalition";
import {
  CoalitionDetailiResponse,
  CoalitionListResponse,
  CoalitionPostRequest,
} from "@/types/ActivityReport/coalition";

interface useCoalitionListProps {
  page: number;
}

export function useCoalitionsList({
  page,
}: useCoalitionListProps): UseSuspenseQueryResult<
  CoalitionListResponse,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetCoalition"],
    queryFn: () => getCoalitionList(page),
  });
}

export function useCoalitionDetail(
  id: number
): UseSuspenseQueryResult<CoalitionDetailiResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetBusinessDetail", id],
    queryFn: () => getCoalitionDetail(id),
  });
}

export function usePostCoalition() {
  return useMutation<{}, Error, CoalitionPostRequest>({
    mutationFn: ({ images, files, createAllianceReq }) =>
      postCoalition({ images, files, createAllianceReq }),
  });
}

export function useDeleteCoalition() {
  return useMutation<{}, Error, { allianceId: number }>({
    mutationFn: ({ allianceId }) => deleteCoalition(allianceId),
  });
}

export function useDeleteAllCoalition() {
  return useMutation<{}, Error>({
    mutationFn: () => deleteAllCoalition(),
  });
}
