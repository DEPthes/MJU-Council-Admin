import FixButton from "@/components/common/FixButton";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyHeaderStyle";

interface PolicyHeaderProps {
  title: string;
}

const PolicyHeader: React.FC<PolicyHeaderProps> = ({ title }) => {
  return (
    <S.Container>
      <S.Bar />
      <S.TextContainer>
        <S.Text>{title}</S.Text>
        <FixButton onClick={() => console.log()} isM70={true} />
      </S.TextContainer>
    </S.Container>
  );
};

export default PolicyHeader;
