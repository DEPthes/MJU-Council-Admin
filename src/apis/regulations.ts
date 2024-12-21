import {
  RegulationsDetail,
  RegulationsList,
  RegulationsPutRequest,
  RegulationsPostRequest,
} from "@/types/Document/regulations";
import { api } from ".";

// 회칙 및 세칙 전체 조회
export async function getRegulations(page: number): Promise<RegulationsList> {
  const response = await api.get(`/api/v1/regulations?page=${page}&size=10`);

  return response?.data;
}

// 회칙 및 세칙 상세 조회
export async function getRegulationsDetail(
  regulationsId: number
): Promise<RegulationsDetail> {
  const response = await api.get(`/api/v1/regulations/${regulationsId}`);

  return response?.data;
}

// 회칙 및 세칙 추가
export async function postRegulations({
  file,
  createRegulationReq,
}: RegulationsPostRequest) {
  const formData = new FormData();

  if (file && file.length > 0) {
    file.forEach((file) => formData.append("file", file));
  } else {
    formData.append("file", new Blob([], { type: "application/octet-stream" }));
  }

  const blob = new Blob([JSON.stringify(createRegulationReq)], {
    type: "application/json",
  });
  formData.append("createRegulationReq", blob);

  const response = await api.post(`/api/v1/regulations`, formData);

  return response?.data;
}

// 회칙 및 세칙 수정
export async function putRegulations(
  regulationId: number,
  { file, modifyRegulationReq }: RegulationsPutRequest
) {
  const formData = new FormData();

  if (file && file.length > 0) {
    file.forEach((file) => formData.append("file", file));
  } else {
    formData.append("file", new Blob([], { type: "application/octet-stream" }));
  }

  const blob = new Blob([JSON.stringify(modifyRegulationReq)], {
    type: "application/json",
  });
  formData.append("modifyRegulationReq", blob);

  const response = await api.put(
    `/api/v1/regulations/${regulationId}`,
    formData
  );

  return response?.data;
}

// 회칙 및 세칙 삭제
export async function deleteRegulationsDetail(regulationId: number) {
  const response = await api.delete(`/api/v1/regulations/${regulationId}`);

  return response?.data;
}

// 회칙 및 세칙 전체 삭제
export async function deleteRegulations() {
  const response = await api.delete(`/api/v1/regulations`);

  return response?.data;
}
