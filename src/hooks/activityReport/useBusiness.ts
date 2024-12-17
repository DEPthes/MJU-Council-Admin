import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  deleteAllBusiness,
  deleteBusiness,
  getBusinessDetail,
  getBusinessList,
  postBusiness,
  putBusiness,
} from "@/apis/ActivityReport/business";
import {
  BusinessDetailResponse,
  BusinessListResponse,
  BusinessPostRequest,
  BusinessPutRequest,
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

export function usePostBusiness() {
  return useMutation<{}, Error, BusinessPostRequest>({
    mutationFn: ({ images, files, createBusinessReq }) =>
      postBusiness({ images, files, createBusinessReq }),
  });
}

export function usePutBusiness() {
  return useMutation<{}, Error, BusinessPutRequest>({
    mutationFn: ({ businessId, images, files, modifyBusinessReq }) =>
      putBusiness(businessId!, { images, files, modifyBusinessReq }),
  });
}

export function useDeleteBusiness() {
  return useMutation<{}, Error, { businessId: number }>({
    mutationFn: ({ businessId }) => deleteBusiness(businessId),
  });
}

export function useDeleteAllBusiness() {
  return useMutation<{}, Error>({
    mutationFn: () => deleteAllBusiness(),
  });
}
