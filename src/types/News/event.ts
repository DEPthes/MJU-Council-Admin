import { ImageFileResponse } from "../common";

export type EventList = {
  check: boolean;
  information: {
    title: string;
    eventId: number;
    startDate: string;
    endDate: string;
    cover: string;
  }[];
};

export type EventDetail = {
  check: boolean;
  information: {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    images: ImageFileResponse[];
    eventDetails: EventDetailResponse[];
  };
};

export type EventDetailResponse = {
  title: string;
  createdAt: string;
  eventDetailId: number;
  cover: string;
};

export type EventGuideDetail = {
  check: boolean;
  information: {
    title: string;
    content: string;
    createdAt: string;
    images: ImageFileResponse[];
    files: ImageFileResponse[];
  };
};

export type EventPostRequest = {
  images: File[];
  createEventReq: {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
  };
};

export type EventPutRequest = {
  images: File[];
  modifyEventReq: {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    deleteImages: number[];
  };
};

export type EventGuidePostRequest = {
  images: File[];
  files: File[];
  createEventDetailReq: {
    title: string;
    content: string;
  };
};

export type EventGuidePutRequest = {
  images: File[];
  files: File[];
  modifyEventDetailReq: {
    title: string;
    content: string;
    deleteImages: number[];
    deleteFiles: number[];
  };
};
