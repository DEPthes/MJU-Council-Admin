import { Arrow } from "@/assets/common";
import { CoalitionContent } from "@/types/ActivityReport/Coalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionComponent";
import { useNavigate } from "react-router-dom";

interface CoalitionComponentProps {
  item: CoalitionContent;
}

const CoalitionComponent: React.FC<CoalitionComponentProps> = ({ item }) => {
  const navigator = useNavigate();
  return (
    <S.Container
      onClick={() =>
        navigator(`/activityReport/coalitionDetail/${item.allianceId}`)
      }
    >
      <img
        src={item.cover}
        alt="Council"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <S.ItemContainer>
        <S.HeacerContainer>
          {item.title}
          <Arrow
            stroke="var(--Secondary)"
            style={{ transform: "rotate(-90deg)" }}
          />
        </S.HeacerContainer>
        <S.Text>제휴 기간:</S.Text>
        <S.Text>
          {item.startDate} ~ {item.endDate}
        </S.Text>
      </S.ItemContainer>
    </S.Container>
  );
};

export default CoalitionComponent;
