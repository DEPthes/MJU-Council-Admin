import * as S from "@styles/common/DetailStyle";
import BlueButton from "../Button/BlueButton";

interface Props {
  title: string;
  onPost: () => void;
}

const SubHeader = ({ title, onPost }: Props) => {
  return (
    <>
      <S.ShortLine />
      <S.TitleContainer>
        <S.HeaderText>{title}</S.HeaderText>
        <BlueButton onClick={onPost} text="글 작성" color="var(--Primary)" />
      </S.TitleContainer>
      <S.LongLine />
    </>
  );
};

export default SubHeader;
