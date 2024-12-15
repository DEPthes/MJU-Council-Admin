import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getRegulations } from "@/apis/regulations";
import { RegulationsList } from "@/types/Document/regulations";

export function useRegulations(
  page: number
): UseSuspenseQueryResult<RegulationsList, Error> {
  return useSuspenseQuery({
    queryKey: ["GetRegulations", page],
    queryFn: () => getRegulations(page),
  });
}
