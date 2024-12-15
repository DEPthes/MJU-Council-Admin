import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getEventGuide } from "@/apis/event";
import { EventGuideDetail } from "@/types/News/event";

export function useEventGuide(
  eventId: number,
  eventDetailId: number
): UseSuspenseQueryResult<EventGuideDetail, Error> {
  return useSuspenseQuery({
    queryKey: ["GetEventGuide", eventId, eventDetailId],
    queryFn: () => getEventGuide(eventId, eventDetailId),
  });
}
