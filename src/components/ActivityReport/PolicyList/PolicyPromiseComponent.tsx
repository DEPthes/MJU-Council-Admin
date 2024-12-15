import { usePromise } from "@/hooks/activityReport/usePromise";
import * as S from "@styles/ActivityReport/PolicyList/PolicyPromiseComponentStyle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PolicyPromiseItem from "./PolicyPromiseItem";

const PolicyPromiseComponent = () => {
  const [isShowNewPromise, setIsShowNewPromise] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const policy = searchParams.get("policy");
  const { data, refetch } = usePromise(policy!);

  useEffect(() => {
    refetch();
  }, [policy]);

  const promiseData = data.information;

  const emptyData = {
    promiseCategoryId: 0,
    title: "",
    content: "",
    progress: 0,
  };
  return (
    <S.Container>
      {promiseData.map((item, index) => (
        <PolicyPromiseItem item={item} key={index} />
      ))}
      {isShowNewPromise && <PolicyPromiseItem item={emptyData} fix={true} />}
      <S.AddButton onClick={() => setIsShowNewPromise(true)}>추가</S.AddButton>
    </S.Container>
  );
};

export default PolicyPromiseComponent;
