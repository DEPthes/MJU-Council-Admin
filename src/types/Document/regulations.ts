export type RegulationsList = {
  check: boolean;
  information: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: {
      regulationId: number;
      title: string;
      date: string;
    }[];
  };
};

export type RegulationsDetail = {
  check: boolean;
  information: {
    regulationId: number;
    title: string;
    content: string;
    date: string;
    files: RegulationsFileResponse[];
  };
};

export type RegulationsFileResponse = {
  regulationFileId: number;
  fileName: string;
  fileUrl: string;
};

export type RegulationsPostRequest = {
  createRegulationReq: {
    title: string;
    content: string;
  };
  file: File[];
};

export type RegulationsPutRequest = {
  modifyRegulationReq: {
    title: string;
    content: string;
    deleteFiles: number[];
  };
  file: File[];
};
