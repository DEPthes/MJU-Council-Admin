import PolicyHeader from "@/components/ActivityReport/PolicyList/PolicyHeader";
import PolicyMenuBar from "@/components/ActivityReport/PolicyList/PolicyMenuBar";
import PolicyNewHeader from "@/components/ActivityReport/PolicyList/PolicyNewHeader";
import PolicyPromiseComponent from "@/components/ActivityReport/PolicyList/PolicyPromiseComponent";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListPageStyle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PolicyListPage = () => {
  const [isShowNewHeader, setIsShowNewHeader] = useState<boolean>(false);
  const [policyParams, setPolicyParams] = useSearchParams();
  const policy = policyParams.get("policy");
  const data = ["권리", "교육", "수정"];

  useEffect(() => {
    if (!policy) {
      policyParams.set("policy", decodeURIComponent(data[0]));
      setPolicyParams(policyParams);
    }
  }, [policyParams, setPolicyParams, policy]);

  const handleChangePolicy = (policy: (typeof data)[number] | "new") => {
    policyParams.set("policy", decodeURIComponent(policy));
    setPolicyParams(policyParams);
    setIsShowNewHeader(policy === "new");
  };

  const handleNewHeader = (header: string) => {
    if (!header) {
      alert("정책 카테고리명을 입력해주세요.");
      return;
    }
    policyParams.set("policy", decodeURIComponent(header));
    setPolicyParams(policyParams);
  };

  return (
    <>
      <PolicyMenuBar policyList={data} onClick={handleChangePolicy} />
      <S.Container>
        {isShowNewHeader ? (
          <PolicyNewHeader onSubmit={handleNewHeader} />
        ) : (
          <>
            <PolicyHeader title={policy!} />
            <PolicyPromiseComponent />
          </>
        )}
      </S.Container>
    </>
  );
};

export default PolicyListPage;
