import {
  NoticeDetail,
  NoticeList,
  NoticePostRequest,
  NoticePutRequest,
} from "@/types/News/notice";
import { api } from ".";

// 공지사항 목록 조회
export async function getNotices(page: number): Promise<NoticeList> {
  const response = await api.get(`/api/v1/notices?page=${page}&size=10`);

  return response?.data;
}

// 공지사항 상세 조회
export async function getNotice(noticeId: number): Promise<NoticeDetail> {
  const response = await api.get(`/api/v1/notices/${noticeId}`);

  return response?.data;
}

// 공지사항 등록
export async function postNotice({
  images,
  files,
  createNoticeReq,
}: NoticePostRequest) {
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

  const blob = new Blob([JSON.stringify(createNoticeReq)], {
    type: "application/json",
  });
  formData.append("createNoticeReq", blob);

  const response = await api.post(`/api/v1/notices`, formData);

  return response?.data;
}

// 공지사항 수정
export async function putNotice(
  noticeId: number,
  { images, files, modifyNoticeReq }: NoticePutRequest
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

  const blob = new Blob([JSON.stringify(modifyNoticeReq)], {
    type: "application/json",
  });
  formData.append("modifyNoticeReq", blob);

  const response = await api.put(`/api/v1/notices/${noticeId}`, formData);

  return response?.data;
}

// 공지사항 삭제
export async function deleteNotice(noticeId: number) {
  const response = await api.delete(`/api/v1/notices/${noticeId}`);

  return response?.data;
}

// 공지사항 전체 삭제
export async function deleteNotices(): Promise<NoticeList> {
  const response = await api.delete(`/api/v1/notices`);

  return response?.data;
}
