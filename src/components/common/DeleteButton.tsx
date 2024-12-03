import * as S from "@/styles/common/Button/CancelButtonStyle";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Text>삭제</S.Text>
    </S.Container>
  );
};

export default DeleteButton;
