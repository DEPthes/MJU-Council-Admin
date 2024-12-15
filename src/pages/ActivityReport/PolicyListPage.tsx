import PolicyHeader from "@/components/ActivityReport/PolicyList/PolicyHeader";
import PolicyMenuBar from "@/components/ActivityReport/PolicyList/PolicyMenuBar";
import PolicyNewHeader from "@/components/ActivityReport/PolicyList/PolicyNewHeader";
import PolicyPromiseComponent from "@/components/ActivityReport/PolicyList/PolicyPromiseComponent";
import { usePromise } from "@/hooks/activityReport/usePromise";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListPageStyle";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PolicyListPage = () => {
  const [isShowNewHeader, setIsShowNewHeader] = useState<boolean>(false);
  const [policyParams, setPolicyParams] = useSearchParams();
  const policy = policyParams.get("policy");

  const { data } = usePromise(policy!);
  const promiseData = data.information;

  const handleChangePolicy = (policy: string) => {
    policyParams.set("policy", decodeURIComponent(policy));
    setPolicyParams(policyParams);
    setIsShowNewHeader(policy === "new");
  };

  return (
    <>
      <PolicyMenuBar onClick={handleChangePolicy} />
      <S.Container>
        {isShowNewHeader ? (
          <PolicyNewHeader />
        ) : (
          <>
            <PolicyHeader title={policy!} />
            <PolicyPromiseComponent promiseData={promiseData} />
          </>
        )}
      </S.Container>
    </>
  );
};

export default PolicyListPage;
