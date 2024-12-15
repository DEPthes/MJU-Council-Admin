import * as S from "@styles/ActivityReport/PolicyList/PolicyPromiseComponentStyle";
import { useState } from "react";
import PolicyPromiseItem from "./PolicyPromiseItem";

const PolicyPromiseComponent = () => {
  const [isShowNewPromise, setIsShowNewPromise] = useState<boolean>(false);
  const data = [
    {
      promiseCategoryId: 1,
      title: "재수강 학점 A0 확대",
      content: "블라블라블라",
      progress: 0,
    },
    {
      promiseCategoryId: 2,
      title: "청소 꼼꼼히 하기",
      content: "블라블라블라",
      progress: 1,
    },
    {
      promiseCategoryId: 3,
      title: "청소 꼼꼼히 ggg하기",
      content: "블라블라블라",
      progress: 2,
    },
  ];

  const emptyData = {
    promiseCategoryId: 0,
    title: "",
    content: "",
    progress: 0,
  };
  return (
    <S.Container>
      {data.map((item, index) => (
        <PolicyPromiseItem item={item} key={index} />
      ))}
      {isShowNewPromise && <PolicyPromiseItem item={emptyData} fix={true} />}
      <S.AddButton onClick={() => setIsShowNewPromise(true)}>추가</S.AddButton>
    </S.Container>
  );
};

export default PolicyPromiseComponent;
