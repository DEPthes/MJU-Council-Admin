import GridItemContainer from "@/components/common/List/GridItemContainer";
import ListBtnContainer from "@/components/common/List/ListBtnContainer";
import PageComponent from "@/components/common/PageComponent";
import { useCoalitionsList } from "@/hooks/activityReport/useCoalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionPageStyle";
import { useNavigate, useSearchParams } from "react-router-dom";

const CoalitionListPage = () => {
  const navigator = useNavigate();
  const [pageParams] = useSearchParams();
  const page = pageParams.get("page") || "1";
  const { data } = useCoalitionsList({ page: Number(page) });

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
          <GridItemContainer
            key={index}
            cover={item.cover}
            title={item.title}
            subject="제휴"
            date={`${item.startDate} ~ ${item.endDate}`}
            onClick={() =>
              navigator(`/activityReport/coalitionDetail/${item.allianceId}`)
            }
          />
        ))}
      </S.CoalitionContainer>
      <PageComponent totalPage={data.information.totalPage} />
    </S.Container>
  );
};

export default CoalitionListPage;
