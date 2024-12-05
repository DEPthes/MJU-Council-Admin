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

type Information = {
  title: string;
  content: string;
  createdAt: string;
  images: BusinessImage[];
  files: BusinessFile[];
};

export type ApiResponse = {
  check: boolean;
  information: Information;
  message: string;
};
