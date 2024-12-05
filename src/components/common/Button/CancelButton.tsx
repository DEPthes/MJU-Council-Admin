import * as S from "@/styles/common/Button/CancelButtonStyle";

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Text>취소</S.Text>
    </S.Container>
  );
};

export default CancelButton;
