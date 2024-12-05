interface CreateBusinessRequest {
  title: string;
  content: string;
}

export interface RequestData {
  images: File[];
  files: File[];
  createBusinessReq: CreateBusinessRequest;
}
