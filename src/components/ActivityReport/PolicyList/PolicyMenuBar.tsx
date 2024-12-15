import { Add } from "@/assets/ActivityReport";
import { usePromiseCategory } from "@/hooks/activityReport/usePromise";
import * as S from "@styles/ActivityReport/PolicyList/PolicyMenuBarStyle";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface PolicyMenuBarProps {
  onClick: (policy: string) => void;
}

const PolicyMenuBar: React.FC<PolicyMenuBarProps> = ({ onClick }) => {
  const [policyParams, setPolicyParams] = useSearchParams();
  const policy = policyParams.get("policy");

  const { data } = usePromiseCategory();
  const categoryList = data.information;

  useEffect(() => {
    if (!policy) {
      policyParams.set("policy", decodeURIComponent(categoryList[0].title));
      setPolicyParams(policyParams);
    }
  }, [policyParams, setPolicyParams, policy]);
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
