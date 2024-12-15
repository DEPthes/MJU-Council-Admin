import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getEvents } from "@/apis/event";
import { EventList } from "@/types/News/event";

export function useEvents(): UseSuspenseQueryResult<EventList, Error> {
  return useSuspenseQuery({
    queryKey: ["GetEvents"],
    queryFn: () => getEvents(),
  });
}
