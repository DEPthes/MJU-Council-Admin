import PolicyHeader from "@/components/ActivityReport/PolicyList/PolicyHeader";
import PolicyMenuBar from "@/components/ActivityReport/PolicyList/PolicyMenuBar";
import PolicyNewHeader from "@/components/ActivityReport/PolicyList/PolicyNewHeader";
import PolicyPromiseComponent from "@/components/ActivityReport/PolicyList/PolicyPromiseComponent";
import { usePromiseCategory } from "@/hooks/activityReport/usePolicyCategory";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListPageStyle";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PolicyListPage: React.FC<{ setIsFixModal: (value: boolean) => void }> = ({
  setIsFixModal,
}) => {
  const [isShowNewHeader, setIsShowNewHeader] = useState<boolean>(false);
  const [policyParams, setPolicyParams] = useSearchParams();
  const policy = policyParams.get("policy");
  const navigator = useNavigate();

  const { data } = usePromiseCategory();
  const categoryList = data.information;
  useEffect(() => {
    if (!policy) {
      policyParams.set("policy", decodeURIComponent(categoryList[0].title));
      setPolicyParams(policyParams);
    }
  }, [policyParams, setPolicyParams, policy]);

  const handleChangePolicy = (policy: string) => {
    policyParams.set("policy", decodeURIComponent(policy));
    setPolicyParams(policyParams);
    setIsShowNewHeader(policy === "new");
    if (policy !== "new") navigator(0);
  };

  const handleExitNewHeader = () => {
    setIsShowNewHeader(false);
  };

  return (
    <>
      <PolicyMenuBar onClick={handleChangePolicy} categoryList={categoryList} />
      <S.Container>
        {isShowNewHeader ? (
          <PolicyNewHeader onExit={handleExitNewHeader} />
        ) : (
          <>
            <PolicyHeader
              title={policy!}
              categoryList={categoryList}
              setIsFixModal={setIsFixModal}
            />
            <PolicyPromiseComponent />
          </>
        )}
      </S.Container>
    </>
  );
};

export default PolicyListPage;
