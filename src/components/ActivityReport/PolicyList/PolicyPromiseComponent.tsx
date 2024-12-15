import { PromiseInformation } from "@/types/ActivityReport/Policy/policy";
import * as S from "@styles/ActivityReport/PolicyList/PolicyPromiseComponentStyle";
import { useState } from "react";
import PolicyPromiseItem from "./PolicyPromiseItem";

const PolicyPromiseComponent = ({
  promiseData,
}: {
  promiseData: PromiseInformation[];
}) => {
  const [isShowNewPromise, setIsShowNewPromise] = useState<boolean>(false);

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
