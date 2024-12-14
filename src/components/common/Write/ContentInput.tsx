import * as S from "@/styles/common/WriteStyle";

interface Props {
  content: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContentInput = ({ content, handleInputChange }: Props) => {
  return (
    <>
      <S.Label>내용</S.Label>
      <S.TextArea
        value={content}
        placeholder="내용을 입력하세요."
        name="content"
        onChange={handleInputChange}
      />
    </>
  );
};

export default ContentInput;
