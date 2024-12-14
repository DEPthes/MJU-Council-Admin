import {
  MinutesDetail,
  MinutesList,
  MinutesPatchRequest,
  MinutesPostRequest,
} from "@/types/Document/minutes";
import axios from "axios";

// 토큰
const Authorization = "";

// 회의록 전체 조회
export async function getMinutes(page: number): Promise<MinutesList> {
  const response = await axios.get(`/api/v1/minutes?page=${page}&size=10`);

  return response?.data;
}

// 회의록 상세 조회
export async function getMinutesDetail(
  minuteId: number
): Promise<MinutesDetail> {
  const response = await axios.get(`/api/v1/minutes/${minuteId}`);

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

  const response = await axios.post(`/api/v1/minutes`, formData, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

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

  const response = await axios.patch(`/api/v1/minutes/${minutesId}`, formData, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 회의록 삭제
export async function deleteMinutesDetail(minutesId: number) {
  const response = await axios.delete(`/api/v1/minutes/${minutesId}`, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 회의록 전체 삭제
export async function deleteMinutes() {
  const response = await axios.delete(`/api/v1/minutes`, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}
