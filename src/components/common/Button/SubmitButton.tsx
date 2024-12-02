import * as S from "@/styles/common/Button/SubmitButtonStyle";

interface SubmitButtonProps {
  onClick: () => void;
  isM70?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, isM70 }) => {
  return (
    <S.Container onClick={onClick} $isM70={isM70}>
      <S.Text>등록</S.Text>
    </S.Container>
  );
};

export default SubmitButton;
