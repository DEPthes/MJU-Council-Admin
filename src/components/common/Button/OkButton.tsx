import * as S from "@/styles/common/Button/SubmitButtonStyle";

interface SubmitButtonProps {
  onClick: () => void;
}

const OkButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Text>확인</S.Text>
    </S.Container>
  );
};

export default OkButton;
