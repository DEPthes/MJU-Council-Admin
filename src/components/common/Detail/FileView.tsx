import { ImageFileResponse } from "@/types/common";
import ViewFileComponent from "../Write/ViewFileComponent";
import * as S from "@styles/common/DetailStyle";

interface Props {
  files: ImageFileResponse[];
}

const FileView = ({ files }: Props) => {
  return (
    <>
      <S.Label>첨부 파일</S.Label>
      {files.map((item, index) => (
        <ViewFileComponent key={index} file={item} />
      ))}
    </>
  );
};

export default FileView;
