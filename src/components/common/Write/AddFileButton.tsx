import { Clip } from "@/assets/common";
import NewFileComponent from "@/components/common/Write/NewFileComponent";
import { ImageFileResponse } from "@/types/common";
import * as S from "@/styles/common/WriteStyle";

interface Props {
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "files" | "images",
    filterType?: string
  ) => void;
  handleFileRemove: (index: number, key: "files" | "images") => void;
  files: File[] | ImageFileResponse[];
}

const AddFileButton = ({
  handleFileChange,
  handleFileRemove,
  files,
}: Props) => {
  return (
    <>
      <S.Label>첨부 파일</S.Label>
      {files.map((item, index) => (
        <NewFileComponent
          key={index}
          title={item.name}
          onClick={() => handleFileRemove(index, "files")}
        />
      ))}
      <S.FileButton
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <Clip stroke="white" />
        파일 업로드
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "files")}
          multiple
        />
      </S.FileButton>
    </>
  );
};

export default AddFileButton;
