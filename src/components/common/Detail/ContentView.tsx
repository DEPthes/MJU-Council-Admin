import * as S from "@/styles/common/DetailStyle";

interface Props {
  content: string;
}

const ContentView = ({ content }: Props) => {
  return (
    <>
      <S.Label>내용</S.Label>
      <S.Content>{content}</S.Content>
    </>
  );
};

export default ContentView;
