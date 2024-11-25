import * as S from "@styles/common/FixButtonStyle";

interface FixButtonProps {
  onClick: () => void;
  isM70?: boolean;
}

const FixButton: React.FC<FixButtonProps> = ({ onClick, isM70 }) => {
  return (
    <S.Container onClick={onClick} $isM70={isM70}>
      <S.Text>수정</S.Text>
    </S.Container>
  );
};

export default FixButton;
