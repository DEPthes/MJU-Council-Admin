import { Arrow } from "@/assets/common";
import * as S from "@/styles/common/List/GridItemContainerStyle";

interface Props {
  cover: string;
  title: string;
  subject: string;
  date: string;
  onClick: () => void;
}

const GridItemContainer = ({ cover, title, subject, date, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <img src={cover} loading="lazy" />
      <S.ItemContainer>
        <S.HeaderContainer>
          {title.length < 13 ? title : `${title.slice(0, 12)}...`}
          <Arrow
            stroke="var(--Secondary)"
            style={{ transform: "rotate(-90deg)" }}
          />
        </S.HeaderContainer>
        <S.Text>{subject} 기간 :</S.Text>
        <S.Text>{date}</S.Text>
      </S.ItemContainer>
    </S.Container>
  );
};

export default GridItemContainer;
