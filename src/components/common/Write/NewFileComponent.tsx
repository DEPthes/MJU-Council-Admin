import { Clip, Close } from "@/assets/common";
import * as S from "@/styles/common/WriteStyle";

interface Props {
  title: string;
  onClick: () => void;
}

const NewFileComponent = ({ title, onClick }: Props) => {
  return (
    <S.FileContainer>
      <S.TitleContainer>
        <Clip stroke="var(--Primary)" /> {title}
      </S.TitleContainer>
      <Close onClick={onClick} style={{ cursor: "pointer" }} />
    </S.FileContainer>
  );
};

export default NewFileComponent;
