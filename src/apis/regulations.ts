import {
  RegulationsDetail,
  RegulationsList,
  RegulationsPatchRequest,
  RegulationsPostRequest,
} from "@/types/Document/regulations";
import axios from "axios";

// 토큰
const Authorization = "";

// 학생회칙 전체 조회
export async function getRegulations(page: number): Promise<RegulationsList> {
  const response = await axios.get(`/api/v1/regulations?page=${page}&size=10`);

  return response?.data;
}

// 학생회칙 상세 조회
export async function getRegulationsDetail(
  regulationsId: number
): Promise<RegulationsDetail> {
  const response = await axios.get(`/api/v1/regulations/${regulationsId}`);

  return response?.data;
}

// 학생회칙 추가
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

  const response = await axios.post(`/api/v1/regulations`, formData, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 학생회칙 수정
export async function patchRegulations(
  regulationId: number,
  { file, modifyRegulationReq }: RegulationsPatchRequest
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

  const response = await axios.patch(
    `/api/v1/regulations/${regulationId}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${Authorization}`,
      },
    }
  );

  return response?.data;
}

// 학생회칙 삭제
export async function deleteRegulationsDetail(regulationId: number) {
  const response = await axios.delete(`/api/v1/regulations/${regulationId}`, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 학생회칙 전체 삭제
export async function deleteRegulations() {
  const response = await axios.delete(`/api/v1/regulations`, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}
