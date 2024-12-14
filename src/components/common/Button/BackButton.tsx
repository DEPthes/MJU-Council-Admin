import * as S from "@styles/common/Button/ButtonStyle";

interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return <S.BackButton onClick={onClick}>목록으로</S.BackButton>;
};

export default BackButton;
