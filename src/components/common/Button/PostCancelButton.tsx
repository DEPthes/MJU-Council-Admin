import * as S from "@/styles/common/Button/PostCancelButtonStyle";

interface PostCancelButtonProps {
  onClick: () => void;
}

const PostCancelButton: React.FC<PostCancelButtonProps> = ({ onClick }) => {
  return <S.Container onClick={onClick}>작성 취소</S.Container>;
};

export default PostCancelButton;
