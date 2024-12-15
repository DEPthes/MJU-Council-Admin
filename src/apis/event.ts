import {
  EventList,
  EventDetail,
  EventGuideDetail,
  EventPostRequest,
  EventGuidePostRequest,
  EventPutRequest,
  EventGuidePutRequest,
} from "@/types/News/event";
import axios from "axios";

// 토큰
const Authorization = "";

// 행사 목록 조회
export async function getEvents(): Promise<EventList> {
  const response = await axios.get(`/api/v1/events`);

  return response?.data;
}

// 행사 상세 조회
export async function getEvent(eventId: number): Promise<EventDetail> {
  const response = await axios.get(`/api/v1/events/${eventId}`);

  return response?.data;
}

// 행사 세부사항 상세 조회
export async function getEventGuide(
  eventId: number,
  eventDetailId: number
): Promise<EventGuideDetail> {
  const response = await axios.get(
    `/api/v1/events/${eventId}/detail/${eventDetailId}`
  );

  return response?.data;
}

// 행사 등록
export async function postEvent({ images, createEventReq }: EventPostRequest) {
  const formData = new FormData();

  if (images && images.length > 0) {
    images.forEach((image) => formData.append("images", image));
  } else {
    formData.append(
      "images",
      new Blob([], { type: "application/octet-stream" })
    );
  }

  const blob = new Blob([JSON.stringify(createEventReq)], {
    type: "application/json",
  });
  formData.append("createEventReq", blob);

  const response = await axios.post(`/api/v1/events`, formData, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 행사 세부사항 등록
export async function postEventGuide(
  eventId: number,
  { images, createEventDetailReq }: EventGuidePostRequest
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

  const blob = new Blob([JSON.stringify(createEventDetailReq)], {
    type: "application/json",
  });
  formData.append("createEventDetailReq", blob);

  const response = await axios.post(
    `/api/v1/events/${eventId}/detail`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${Authorization}`,
      },
    }
  );

  return response?.data;
}

// 행사 수정
export async function putEvent(
  eventId: number,
  { images, modifyEventReq }: EventPutRequest
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

  const blob = new Blob([JSON.stringify(modifyEventReq)], {
    type: "application/json",
  });
  formData.append("modifyEventReq", blob);

  const response = await axios.put(`/api/v1/events/${eventId}`, formData, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 행사 세부사항 수정
export async function putEventGuide(
  eventId: number,
  eventDetailId: number,
  { images, modifyEventDetailReq }: EventGuidePutRequest
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

  const blob = new Blob([JSON.stringify(modifyEventDetailReq)], {
    type: "application/json",
  });
  formData.append("modifyEventDetailReq", blob);

  const response = await axios.put(
    `/api/v1/events/${eventId}/detail/${eventDetailId}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${Authorization}`,
      },
    }
  );

  return response?.data;
}

// 행사 삭제
export async function deleteEventDetail(eventId: number) {
  const response = await axios.delete(`/api/v1/events/${eventId}`, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}

// 행사 세부사항 삭제
export async function deleteEventGuideDetail(
  eventId: number,
  eventDetailId: number
) {
  const response = await axios.delete(
    `/api/v1/events/${eventId}/detail/${eventDetailId}`,
    {
      headers: {
        Authorization: `Bearer ${Authorization}`,
      },
    }
  );

  return response?.data;
}

// 행사 전체 삭제
export async function deleteEvents() {
  const response = await axios.delete(`/api/v1/events`, {
    headers: {
      Authorization: `Bearer ${Authorization}`,
    },
  });

  return response?.data;
}
