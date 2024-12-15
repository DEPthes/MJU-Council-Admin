import { Add } from "@/assets/ActivityReport";
import { PromiseCategory } from "@/types/ActivityReport/policy";
import * as S from "@styles/ActivityReport/PolicyList/PolicyMenuBarStyle";
import { useSearchParams } from "react-router-dom";

interface PolicyMenuBarProps {
  onClick: (policy: string) => void;
  categoryList: PromiseCategory[];
}

const PolicyMenuBar: React.FC<PolicyMenuBarProps> = ({
  onClick,
  categoryList,
}) => {
  const [policyParams] = useSearchParams();
  const policy = policyParams.get("policy");
  return (
    <S.Container>
      {categoryList.map((category) => (
        <S.Item
          key={category.promiseCategoryId}
          $isSelected={category.title === policy}
          onClick={() => onClick(category.title)}
        >
          {category.title}
        </S.Item>
      ))}
      <S.Item $isSelected={policy === "new"} onClick={() => onClick("new")}>
        <Add />
      </S.Item>
    </S.Container>
  );
};

export default PolicyMenuBar;
