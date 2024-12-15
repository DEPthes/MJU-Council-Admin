export interface CoalitionContent {
  allianceId: number;
  title: string;
  cover: string;
  startDate: string;
  endDate: string;
}

export interface CoalitionInformation {
  totalPage: number;
  pageSize: number;
  totalElements: number;
  contents: CoalitionContent[];
}

export interface CoalitionListResponse {
  check: boolean;
  information: CoalitionInformation;
  message: string;
}

// BusinessButtonContainer Props 타입 정의
export interface BusinessButtonContainerProps {
  onDelete: () => void;
  onPost: () => void;
}

// CoalitionComponent Props 타입 정의
export interface CoalitionComponentProps {
  item: CoalitionContent;
}

// -------------------- {{ 재휴 상세 조회 }} --------------------------

interface CoalitionFile {
  id: number;
  name: string;
  url: string;
}

export interface CoalitionInfo {
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  images: CoalitionFile[];
  files: CoalitionFile[];
}

export interface CoalitionDetailiResponse {
  check: boolean;
  information: CoalitionInfo;
  message: string;
}

export type CoalitionPostRequest = {
  images: File[];
  files: File[];
  createAllianceReq: {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
  };
};

export type CoalitionPutRequest = {
  images: File[];
  files: File[];
  modifyAllianceReq: {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    deleteImages?: number[];
    deleteFiles?: number[];
  };
};
