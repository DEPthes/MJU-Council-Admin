import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  deleteAllBusiness,
  deleteBusiness,
  getBusinessDetail,
  postBusiness,
  putBusiness,
} from "@/apis/ActivityReport/business";
import { getCoalitionList } from "@/apis/ActivityReport/coalition";
import {
  BusinessDetailResponse,
  BusinessPostRequest,
  BusinessPutRequest,
} from "@/types/ActivityReport/business";
import { CoalitionListResponse } from "@/types/ActivityReport/coalition";

interface useCoalitionListProps {
  page: number;
}

export function useCoalitionsList({
  page,
}: useCoalitionListProps): UseSuspenseQueryResult<
  CoalitionListResponse,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetCoalition"],
    queryFn: () => getCoalitionList(page),
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
