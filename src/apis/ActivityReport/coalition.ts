import {
  BusinessDetailResponse,
  BusinessPostRequest,
  BusinessPutRequest,
} from "@/types/ActivityReport/business";

import { CoalitionListResponse } from "@/types/ActivityReport/coalition";
import { api } from "..";

// 재휴 목록 조회
export async function getCoalitionList(
  page: number
): Promise<CoalitionListResponse> {
  const response = await api.get(`/api/v1/alliances?page=${page - 1}`);
  return response?.data;
}

// 사업 목록 상세 조회
export async function getBusinessDetail(
  id: number
): Promise<BusinessDetailResponse> {
  const response = await api.get(`/api/v1/businesses/${id}`);

  return response?.data;
}

// 사업 등록
export async function postBusiness({
  images,
  files,
  createBusinessReq,
}: BusinessPostRequest) {
  const formData = new FormData();

  if (images && images.length > 0) {
    images.forEach((image) => formData.append("images", image));
  } else {
    formData.append(
      "images",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  if (files && files.length > 0) {
    files.forEach((file) => formData.append("files", file));
  } else {
    formData.append(
      "files",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  const blob = new Blob([JSON.stringify(createBusinessReq)], {
    type: "application/json",
  });
  formData.append("createBusinessReq", blob);
  console.log(formData);

  const response = await api.post(`/api/v1/businesses`, formData);

  return response?.data;
}

// 사업 수정
export async function putBusiness(
  businessId: number,
  { images, files, modifyBusinessReq }: BusinessPutRequest
) {
  const formData = new FormData();

  if (images && images.length > 0) {
    images.forEach((image) => formData.append("images", image));
  } else {
    formData.append(
      "images",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  if (files && files.length > 0) {
    files.forEach((file) => formData.append("files", file));
  } else {
    formData.append(
      "files",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  const blob = new Blob([JSON.stringify(modifyBusinessReq)], {
    type: "application/json",
  });
  formData.append("modifyBusinessReq", blob);

  const response = await api.put(`/api/v1/businesses/${businessId}`, formData);

  return response?.data;
}

//사업 삭제
export async function deleteBusiness(businessId: number): Promise<string[]> {
  return await api.delete(`/api/v1/businesses/${businessId}`);
}

//사업 전체삭제
export async function deleteAllBusiness(): Promise<string[]> {
  return await api.delete(`/api/v1/businesses`);
}
