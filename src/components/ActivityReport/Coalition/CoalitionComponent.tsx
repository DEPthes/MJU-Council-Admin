import { Arrow } from "@/assets/common";
import { CoalitionContent } from "@/types/ActivityReport/Coalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionComponent";

interface CoalitionComponentProps {
  item: CoalitionContent;
}

const CoalitionComponent: React.FC<CoalitionComponentProps> = ({ item }) => {
  return (
    <S.Container>
      <img
        src={item.cover}
        alt="Council"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <S.ItemContainer>
        <S.HeacerContainer>
          제휴명
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
