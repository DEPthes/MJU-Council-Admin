import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  getCoalitionDetail,
  getCoalitionList,
} from "@/apis/ActivityReport/coalition";
import {
  AllianceDetailResponse,
  AllianceListResponse,
} from "@/types/ActivityReport/coalition";

interface useCoalitionListProps {
  page: number;
}

export function useCoalitionList({
  page,
}: useCoalitionListProps): UseSuspenseQueryResult<AllianceListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetCoalition"],
    queryFn: () => getCoalitionList(page),
  });
}

export function useCoalitionDetail(
  allianceId: number
): UseSuspenseQueryResult<AllianceDetailResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetBusinessDetail", allianceId],
    queryFn: () => getCoalitionDetail(allianceId),
  });
}
