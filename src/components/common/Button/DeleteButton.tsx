import * as S from "@/styles/common/Button/CancelButtonStyle";

interface DeleteButtonProps {
  text?: string;
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  text = "삭제",
  onClick,
}) => {
  return (
    <S.Container onClick={onClick}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default DeleteButton;
