import * as S from "@styles/ActivityReport/PolicyList/PolicyHeader";

interface PolicyHeaderProps {
  title: string;
}

const PolicyHeader: React.FC<PolicyHeaderProps> = ({ title }) => {
  return (
    <S.Container>
      <S.Bar />
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};

export default PolicyHeader;
