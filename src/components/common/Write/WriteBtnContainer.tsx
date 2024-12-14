import * as S from "@styles/common/List/ListBtnContainerStyle";
import WhiteButton from "../Button/WhiteButton";
import BlueButton from "../Button/BlueButton";

interface Props {
  onCancel: () => void;
  onSubmit: () => void;
  isDisabled: boolean;
}

const WriteBtnContainer = ({ onCancel, onSubmit, isDisabled }: Props) => {
  return (
    <S.ButtonContainer>
      <WhiteButton text="작성 취소" color="var(--M50)" onClick={onCancel} />
      <BlueButton
        text="등록"
        color="var(--Primary)"
        onClick={onSubmit}
        disabled={isDisabled}
      />
    </S.ButtonContainer>
  );
};

export default WriteBtnContainer;
