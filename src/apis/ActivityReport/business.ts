import {
  BusinessDetailResponse,
  BusinessListResponse,
} from "@/types/ActivityReport/business";
import axios from "axios";

// 사업 목록 조회
export async function getBusinessList(
  page: number,
  keyword?: string
): Promise<BusinessListResponse> {
  let url = `/api/v1/businesses?page=${page - 1}`;

  if (keyword !== undefined) {
    url += `&keyword=${keyword}`;
  }

  const response = await axios.get(url);

  return response?.data;
}

// 사업 목록 상세 조회
export async function getBusinessDetail(
  id: number
): Promise<BusinessDetailResponse> {
  const response = await axios.get(`/api/v1/businesses/${id}`);

  return response?.data;
}
