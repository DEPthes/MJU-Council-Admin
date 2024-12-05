import * as S from "@styles/ActivityReport/BusinessList/BusinessButtonContainer";

interface BusinessButtonContainerProps {
  onDelete: () => void;
  onPost: () => void;
}

const BusinessButtonContainer: React.FC<BusinessButtonContainerProps> = ({
  onDelete,
  onPost,
}) => {
  return (
    <S.ButtonContainer>
      <S.AllDeleteButton onClick={onDelete}>
        <S.Text>전체 삭제</S.Text>
      </S.AllDeleteButton>
      <S.NewPostButton onClick={onPost}>
        <S.Text>글 작성</S.Text>
      </S.NewPostButton>
    </S.ButtonContainer>
  );
};

export default BusinessButtonContainer;
