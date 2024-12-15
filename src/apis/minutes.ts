import {
  MinutesDetail,
  MinutesList,
  MinutesPatchRequest,
  MinutesPostRequest,
} from "@/types/Document/minutes";
import { api } from ".";

// 회의록 전체 조회
export async function getMinutes(page: number): Promise<MinutesList> {
  const response = await api.get(`/api/v1/minutes?page=${page}&size=10`);

  return response?.data;
}

// 회의록 상세 조회
export async function getMinutesDetail(
  minuteId: number
): Promise<MinutesDetail> {
  const response = await api.get(`/api/v1/minutes/${minuteId}`);

  return response?.data;
}

// 회의록 등록
export async function postMinutes({
  files,
  createMinuteReq,
}: MinutesPostRequest) {
  const formData = new FormData();

  if (files && files.length > 0) {
    files.forEach((file) => formData.append("files", file));
  } else {
    formData.append(
      "files",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  const blob = new Blob([JSON.stringify(createMinuteReq)], {
    type: "application/json",
  });
  formData.append("createMinuteReq", blob);

  const response = await api.post(`/api/v1/minutes`, formData);

  return response?.data;
}

// 회의록 수정
export async function patchMinutes(
  minutesId: number,
  { files, modifyMinuteReq }: MinutesPatchRequest
) {
  const formData = new FormData();

  if (files && files.length > 0) {
    files.forEach((file) => formData.append("files", file));
  } else {
    formData.append(
      "files",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  const blob = new Blob([JSON.stringify(modifyMinuteReq)], {
    type: "application/json",
  });
  formData.append("modifyMinuteReq", blob);

  const response = await api.patch(`/api/v1/minutes/${minutesId}`, formData);

  return response?.data;
}

// 회의록 삭제
export async function deleteMinutesDetail(minutesId: number) {
  const response = await api.delete(`/api/v1/minutes/${minutesId}`);

  return response?.data;
}

// 회의록 전체 삭제
export async function deleteMinutes() {
  const response = await api.delete(`/api/v1/minutes`);

  return response?.data;
}
