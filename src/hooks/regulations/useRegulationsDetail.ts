import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getRegulationsDetail } from "@/apis/regulations";
import { RegulationsDetail } from "@/types/Document/regulations";

export function useRegulationsDetail(
  regulationsId: number
): UseSuspenseQueryResult<RegulationsDetail, Error> {
  return useSuspenseQuery({
    queryKey: ["GetRegulationsDetail", regulationsId],
    queryFn: () => getRegulationsDetail(regulationsId),
  });
}
