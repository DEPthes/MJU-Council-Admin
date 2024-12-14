import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getNotice } from "@/apis/notice";
import { NoticeDetail } from "@/types/News/notice";

export function useNotice(
  noticeId: number
): UseSuspenseQueryResult<NoticeDetail, Error> {
  return useSuspenseQuery({
    queryKey: ["GetNotice", noticeId],
    queryFn: () => getNotice(noticeId),
  });
}
