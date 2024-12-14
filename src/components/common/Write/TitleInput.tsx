import * as S from "@/styles/common/WriteStyle";

interface Props {
  title: string;
  placeholder?: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TitleInput = ({
  title,
  placeholder = "제목을 입력하세요.",
  handleInputChange,
}: Props) => {
  return (
    <>
      <S.Label>제목</S.Label>
      <S.TitleInput
        value={title}
        placeholder={placeholder}
        name="title"
        onChange={handleInputChange}
      />
    </>
  );
};

export default TitleInput;
