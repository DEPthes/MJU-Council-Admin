import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getEvent } from "@/apis/event";
import { EventDetail } from "@/types/News/event";

export function useEvent(
  eventId: number
): UseSuspenseQueryResult<EventDetail, Error> {
  return useSuspenseQuery({
    queryKey: ["GetEvent", eventId],
    queryFn: () => getEvent(eventId),
  });
}
