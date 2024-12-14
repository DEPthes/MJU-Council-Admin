import * as S from "@/styles/common/Button/FixButtonStyle";

interface FixButtonProps {
  text?: string;
  onClick: () => void;
  isM70?: boolean;
}

const FixButton: React.FC<FixButtonProps> = ({
  text = "수정",
  onClick,
  isM70,
}) => {
  return (
    <S.Container onClick={onClick} $isM70={isM70}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default FixButton;
