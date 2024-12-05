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

export interface CoalitionData {
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
