import { Clip } from "@/assets/common";
import * as S from "@/styles/common/WriteStyle";
import { BusinessFile } from "@/types/ActivityReport/businessDetailType";

interface Props {
  file: BusinessFile;
}

const ViewFileComponent = ({ file }: Props) => {
  // const handleDownload = async () => {
  //   try {
  //     const response = await fetch(file.url);

  //     if (!response.ok) {
  //       throw new Error("파일을 다운로드할 수 없습니다.");
  //     }

  //     const blob = await response.blob();

  //     const downloadUrl = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = downloadUrl;
  //     link.download = file.name;
  //     link.click();

  //     // 메모리 해제
  //     URL.revokeObjectURL(downloadUrl);
  //   } catch (error) {
  //     console.error("다운로드 중 오류 발생:", error);
  //   }
  // };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = file.url;
    a.download = file.name;
    a.click();
  };
  return (
    <S.FileContainer>
      <S.TitleContainer onClick={handleDownload} style={{ cursor: "pointer" }}>
        <Clip stroke="var(--Primary)" /> <p>{file.name}</p>
      </S.TitleContainer>
    </S.FileContainer>
  );
};

export default ViewFileComponent;
