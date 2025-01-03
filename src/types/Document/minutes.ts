export type MinutesList = {
  check: boolean;
  information: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: {
      minuteId: number;
      title: string;
      date: string;
    }[];
  };
};

export type MinutesDetail = {
  check: boolean;
  information: {
    minuteId: number;
    title: string;
    content: string;
    date: string;
    files: MinutesFileResponse[];
  };
};

export type MinutesFileResponse = {
  minuteFileId: number;
  fileName: string;
  fileUrl: string;
};

export type MinutesPostRequest = {
  files: File[];
  createMinuteReq: {
    title: string;
    content: string;
  };
};

export type MinutesPutRequest = {
  files: File[];
  modifyMinuteReq: {
    title: string;
    content: string;
    deleteFiles: number[];
  };
};
