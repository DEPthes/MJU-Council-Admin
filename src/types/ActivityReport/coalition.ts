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

interface Image {
  id: number;
  name: string;
  url: string;
}

interface File {
  id: number;
  name: string;
  url: string;
}

interface CoalitionInfo {
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  images: Image[];
  files: File[];
}

export interface CoalitionDetailiResponse {
  check: boolean;
  information: CoalitionInfo;
  message: string;
}
