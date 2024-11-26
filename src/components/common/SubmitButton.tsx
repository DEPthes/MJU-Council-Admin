import * as S from "@/styles/common/Button/SubmitButtonStyle";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Text>등록</S.Text>
    </S.Container>
  );
};

export default SubmitButton;
