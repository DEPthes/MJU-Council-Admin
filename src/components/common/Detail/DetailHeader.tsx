import * as S from "@styles/common/DetailStyle";
import WhiteButton from "../Button/WhiteButton";
import BlueButton from "../Button/BlueButton";

interface Props {
  title: string;
  date: string;
  subTitle?: string;
  onDelete: () => void;
  onEdit: () => void;
}

const DetailHeader = ({ title, subTitle, date, onDelete, onEdit }: Props) => {
  return (
    <>
      <S.TitleContainer>
        <S.HeaderText>{title}</S.HeaderText>
        <S.ButtonContainer>
          <WhiteButton onClick={onDelete} text="삭제" color="var(--M70)" />
          <BlueButton onClick={onEdit} text="수정" color="var(--Primary)" />
        </S.ButtonContainer>
      </S.TitleContainer>
      {subTitle && <S.Text>{subTitle}</S.Text>}
      <S.Date>{date}</S.Date>
      <S.LongLine />
    </>
  );
};

export default DetailHeader;
