export type BusinessFile = {
  id: number;
  name: string;
  url: string;
};

type BusinessImage = {
  id: number;
  name: string;
  url: string;
};

export type BusinessDetailInformation = {
  title: string;
  content: string;
  createdAt: string;
  images: BusinessImage[];
  files: BusinessFile[];
};

export type BusinessDetailResponse = {
  check: boolean;
  information: BusinessDetailInformation;
  message: string;
};
