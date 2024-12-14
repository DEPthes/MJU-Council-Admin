import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getMinutesDetail } from "@/apis/minutes";
import { MinutesDetail } from "@/types/Document/minutes";

export function useMinutesDetail(
  minuteId: number
): UseSuspenseQueryResult<MinutesDetail, Error> {
  return useSuspenseQuery({
    queryKey: ["GetMinutesDetail", minuteId],
    queryFn: () => getMinutesDetail(minuteId),
  });
}
