import * as S from "@/styles/common/Button/SubmitButtonStyle";

interface SubmitButtonProps {
  onClick: () => void;
  isM70?: boolean;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  isM70,
  disabled,
}) => {
  return (
    <S.Container onClick={disabled ? undefined : onClick} $isM70={isM70}>
      <S.Text>등록</S.Text>
    </S.Container>
  );
};

export default SubmitButton;
