import * as S from "@styles/ActivityReport/PolicyList/PolicyPromiseComponentStyle";
import PolicyPromiseItem from "./PolicyPromiseItem";

const PolicyPromiseComponent = () => {
  const data = [
    {
      id: 1,
      title: "재수강 학점 A0 확대",
      content: "블라블라블라",
      progress: 0,
    },
    {
      id: 2,
      title: "청소 꼼꼼히 하기",
      content: "블라블라블라",
      progress: 1,
    },
    {
      id: 3,
      title: "청소 꼼꼼히 하기",
      content: "블라블라블라",
      progress: 2,
    },
  ];
  return (
    <S.Container>
      {data.map((item, index) => (
        <PolicyPromiseItem item={item} key={index} />
      ))}
    </S.Container>
  );
};

export default PolicyPromiseComponent;
