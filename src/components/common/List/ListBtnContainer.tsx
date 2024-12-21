import * as S from "@styles/common/List/ListBtnContainerStyle";
import WhiteButton from "../Button/WhiteButton";
import BlueButton from "../Button/BlueButton";

interface Props {
  onDelete: () => void;
  onPost: () => void;
  isDisabled: boolean;
}

const ListBtnContainer = ({ onDelete, onPost, isDisabled }: Props) => {
  return (
    <S.ButtonContainer>
      <WhiteButton
        text="전체 삭제"
        color="var(--M70)"
        onClick={onDelete}
        isDisabled={isDisabled}
      />
      <BlueButton text="글 작성" color="var(--Primary)" onClick={onPost} />
    </S.ButtonContainer>
  );
};

export default ListBtnContainer;
