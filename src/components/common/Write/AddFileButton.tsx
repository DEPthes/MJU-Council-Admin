import { Clip } from "@/assets/common";
import NewFileComponent from "@/components/common/Write/NewFileComponent";
import { ImageFileResponse } from "@/types/common";
import * as S from "@/styles/common/WriteStyle";
import { MinutesFileResponse } from "@/types/Document/minutes";
import { RegulationsFileResponse } from "@/types/Document/regulations";

interface Props {
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "files" | "images",
    filterType?: string
  ) => void;
  handleFileRemove: (index: number, key: "files" | "images") => void;
  files:
    | File[]
    | ImageFileResponse[]
    | MinutesFileResponse[]
    | RegulationsFileResponse[];
}

const AddFileButton = ({
  handleFileChange,
  handleFileRemove,
  files,
}: Props) => {
  const handleFileInputClick = () => {
    const input = document.getElementById("file-input") as HTMLInputElement;
    input.value = "";
    input.click();
  };

  return (
    <>
      <S.Label>첨부 파일</S.Label>
      {files.map((item, index) => {
        const fileItem =
          "fileName" in item ? { ...item, name: item.fileName } : item;

        return (
          <NewFileComponent
            key={index}
            title={fileItem.name}
            onClick={() => handleFileRemove(index, "files")}
          />
        );
      })}
      <S.FileButton onClick={handleFileInputClick}>
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
