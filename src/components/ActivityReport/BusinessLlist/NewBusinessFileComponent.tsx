import { Clip, Close } from "@/assets/common";
import * as S from "@styles/ActivityReport/BusinessList/NewBusinessFileComponentStyle";

interface NewBusinessFileComponentProps {
  title: string;
  onClick: () => void;
}
const NewBusinessFileComponent: React.FC<NewBusinessFileComponentProps> = ({
  title,
  onClick,
}) => {
  return (
    <S.Container>
      <S.tilteContainer>
        <Clip stroke="var(--Primary)" /> {title}
      </S.tilteContainer>
      <Close onClick={onClick} style={{ cursor: "pointer" }} />
    </S.Container>
  );
};

export default NewBusinessFileComponent;
