import { Add } from "@/assets/ActivityReport";
import * as S from "@styles/ActivityReport/PolicyList/PolicyMenuBarStyle";
import { useSearchParams } from "react-router-dom";

interface PolicyMenuBarProps {
  policyList: string[];
  onClick: (policy: string) => void;
}

const PolicyMenuBar: React.FC<PolicyMenuBarProps> = ({
  policyList,
  onClick,
}) => {
  const [policyParams] = useSearchParams();
  const policy = policyParams.get("policy");
  return (
    <S.Container>
      {policyList.map((title) => (
        <S.Item $isSelected={title === policy} onClick={() => onClick(title)}>
          {title}
        </S.Item>
      ))}
      <S.Item $isSelected={false} onClick={() => console.log()}>
        <Add />
      </S.Item>
    </S.Container>
  );
};

export default PolicyMenuBar;
