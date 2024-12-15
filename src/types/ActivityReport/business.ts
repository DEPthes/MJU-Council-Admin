// ------------------- {{ 사업 목록 조회 }} ---------------------------------

export interface Business {
  businessId: number;
  title: string;
  createdAt: string;
}

export interface Information {
  totalPage: number;
  pageSize: number;
  totalElements: number;
  contents: Business[];
}

export interface BusinessListResponse {
  check: boolean;
  information: Information;
  message: string | null;
}

export type BusinessPostRequest = {
  images: File[];
  files: File[];
  createBusinessReq: {
    title: string;
    content: string;
  };
};

// --------------------- {{ 사업 상세 조회 }} -------------------------------

interface BusinessFile {
  id: number;
  name: string;
  url: string;
}

export interface BusinessInformation {
  title: string;
  content: string;
  createdAt: string;
  images: BusinessFile[];
  files: BusinessFile[];
}

export interface BusinessDetailResponse {
  check: boolean;
  information: BusinessInformation;
  message: string;
}
