import PolicyHeader from "@/components/ActivityReport/PolicyList/PolicyHeader";
import PolicyMenuBar from "@/components/ActivityReport/PolicyList/PolicyMenuBar";
import PolicyPromiseComponent from "@/components/ActivityReport/PolicyList/PolicyPromiseComponent";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListPageStyle";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PolicyListPage = () => {
  const [policyParams, setPolicyParams] = useSearchParams();
  const policy = policyParams.get("policy");
  const data = ["권리", "교육", "수정"];

  useEffect(() => {
    if (!policy) {
      policyParams.set("policy", decodeURIComponent(data[0]));
      setPolicyParams(policyParams);
    }
  }, [policyParams, setPolicyParams, policy]);

  const handleChangePolicy = (policy: (typeof data)[number]) => {
    policyParams.set("policy", decodeURIComponent(policy));
    setPolicyParams(policyParams);
  };

  return (
    <>
      <PolicyMenuBar policyList={data} onClick={handleChangePolicy} />
      <S.Container>
        <PolicyHeader title={policy!} />
        <PolicyPromiseComponent />
        <S.AddButton>추가</S.AddButton>
      </S.Container>
    </>
  );
};

export default PolicyListPage;
