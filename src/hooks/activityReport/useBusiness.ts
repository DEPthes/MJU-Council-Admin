import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  getBusinessDetail,
  getBusinessList,
} from "@/apis/ActivityReport/business";
import {
  BusinessDetailResponse,
  BusinessListResponse,
} from "@/types/ActivityReport/business";

interface useBusinessListProps {
  keyword?: string;
  page: number;
}

export function useBusinessList({
  keyword,
  page,
}: useBusinessListProps): UseSuspenseQueryResult<BusinessListResponse, Error> {
  if (keyword === undefined) {
    return useSuspenseQuery({
      queryKey: ["GetBusiness"],
      queryFn: () => getBusinessList(page),
    });
  }
  return useSuspenseQuery({
    queryKey: ["GetBusiness", keyword],
    queryFn: () => getBusinessList(page, keyword),
  });
}

export function useBusinessDetail(
  businessId: number
): UseSuspenseQueryResult<BusinessDetailResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetBusinessDetail", businessId],
    queryFn: () => getBusinessDetail(businessId),
  });
}
