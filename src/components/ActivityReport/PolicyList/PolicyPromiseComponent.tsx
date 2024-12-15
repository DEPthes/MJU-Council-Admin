import { usePromise } from "@/hooks/activityReport/usePromise";
import * as S from "@styles/ActivityReport/PolicyList/PolicyPromiseComponentStyle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NewPolicyPromiseItem from "./NewPolicyPromiseItem";
import PolicyPromiseItem from "./PolicyPromiseItem";

const PolicyPromiseComponent = () => {
  const [isShowNewPromise, setIsShowNewPromise] = useState<boolean>(false);

  const [policyParams] = useSearchParams();
  const policy = policyParams.get("policy");
  const { data, refetch } = usePromise(policy!);

  useEffect(() => {
    refetch();
  }, [policy, policyParams]);
  const promiseData = data.information;

  return (
    <S.Container>
      {promiseData.map((item, index) => (
        <PolicyPromiseItem item={item} key={index} />
      ))}
      {isShowNewPromise && (
        <NewPolicyPromiseItem onCancel={() => setIsShowNewPromise(false)} />
      )}
      <S.AddButton onClick={() => setIsShowNewPromise(true)}>추가</S.AddButton>
    </S.Container>
  );
};

export default PolicyPromiseComponent;
