import CoalitionComponent from "@/components/ActivityReport/Coalition/CoalitionComponent";
import ListBtnContainer from "@/components/common/List/ListBtnContainer";
import * as S from "@styles/ActivityReport/Coalition/CoalitionPageStyle";
import { useNavigate } from "react-router-dom";

const data = {
  check: true,
  information: {
    totalPage: 2,
    pageSize: 9,
    totalElements: 10,
    contents: [
      {
        allianceId: 10,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/de1f39db-b6a0-4899-840d-992ef5e5aff6.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 9,
        title: "제aefe휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/7b7752ed-2643-4ecf-9f25-6c672e5a5380.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 8,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/32de5582-b260-43f4-b361-9c544a6d14f9.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 7,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/312880af-e4e9-48ee-ab5b-97745b30961d.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 6,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/e7b8b514-8c51-4151-8195-55cd7635fcdf.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 5,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/d76b38cf-e840-475a-ba42-2cabfee1c172.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 4,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/3619bc58-19f5-40cf-8276-ce41498a936e.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 3,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/0fc3fd68-daad-4872-a363-9536125a9bae.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
      {
        allianceId: 2,
        title: "제휴",
        cover:
          "https://council-s3-bucket.s3.amazonaws.com/file/0f2c4641-d9b1-4003-863b-8f01b7d95bae.png",
        startDate: "2024-11-12",
        endDate: "2024-11-13",
      },
    ],
  },
  message: "제휴 목록을 조회합니다.",
};

const CoalitionListPage = () => {
  const navigator = useNavigate();

  return (
    <S.Container>
      <ListBtnContainer
        onDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
        onPost={() => navigator("/activityReport/newCoalition")}
      />
      <S.CoalitionContainer>
        {data.information.contents.map((item, index) => (
          <CoalitionComponent key={index} item={item} />
        ))}
      </S.CoalitionContainer>
    </S.Container>
  );
};

export default CoalitionListPage;
