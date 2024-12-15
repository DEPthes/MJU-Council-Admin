import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import {
  deleteAllBusiness,
  deleteBusiness,
  putBusiness,
} from "@/apis/ActivityReport/business";
import {
  getCoalitionDetail,
  getCoalitionList,
  postCoalition,
} from "@/apis/ActivityReport/coalition";
import { BusinessPutRequest } from "@/types/ActivityReport/business";
import {
  CoalitionDetailiResponse,
  CoalitionListResponse,
  CoalitionPostRequest,
} from "@/types/ActivityReport/coalition";

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

export function useCoalitionDetail(
  id: number
): UseSuspenseQueryResult<CoalitionDetailiResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetBusinessDetail", id],
    queryFn: () => getCoalitionDetail(id),
  });
}

export function usePostCoalition() {
  return useMutation<{}, Error, CoalitionPostRequest>({
    mutationFn: ({ images, files, createAllianceReq }) =>
      postCoalition({ images, files, createAllianceReq }),
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
