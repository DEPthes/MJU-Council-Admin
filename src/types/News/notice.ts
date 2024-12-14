import { ImageFileResponse } from "../common";

export type NoticeList = {
  check: boolean;
  information: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: NoticeListItem[];
  };
};

export type NoticeListItem = {
  noticeId: number;
  title: string;
  createdAt: string;
};

export type NoticeDetail = {
  check: boolean;
  information: {
    title: string;
    content: string;
    createdAt: string;
    images: ImageFileResponse[];
    files: ImageFileResponse[];
  };
};

export type NoticePostRequest = {
  images: File[];
  files: File[];
  createNoticeReq: {
    title: string;
    content: string;
  };
};

export type NoticePutRequest = {
  images: File[];
  files: File[];
  modifyNoticeReq: {
    title: string;
    content: string;
    deleteImages: number[];
    deleteFiles: number[];
  };
};
