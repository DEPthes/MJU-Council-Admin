import { NoticeDetail, NoticeList } from "@/types/News/notice";
import axios from "axios";

// 공지사항 목록 조회
export async function getNotices(page: number): Promise<NoticeList> {
  const response = await axios.get(`/api/v1/notices?page=${page}&size=10`);

  return response?.data;
}

// 공지사항 상세 조회
export async function getNotice(noticeId: number): Promise<NoticeDetail> {
  const response = await axios.get(`/api/v1/notices/${noticeId}`);

  return response?.data;
}

// 공지사항 전체 삭제
export async function deleteNotices() {
  const response = await axios.delete(`/api/v1/notices`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRvb2dpIiwiaWF0IjoxNzM0MTMyOTc4LCJleHAiOjE3MzQxMzQ3NzgsInN1YiI6ImRvb2dpIn0.xy53-7tdnZt-n8yqOXki3HFCFKFiVOpUmNGKk8ePlcs`,
    },
  });

  return response?.data;
}
