import { Clip } from "@/assets/common";
import { BusinessFile } from "@/types/ActivityReport/Business/businessDetailType";
import * as S from "@styles/ActivityReport/BusinessList/NewBusinessFileComponentStyle";
import React from "react";

interface BusinessFileComponentProps {
  file: BusinessFile;
}
const BusinessFileComponent: React.FC<BusinessFileComponentProps> = ({
  file,
}) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(file.url);

      if (!response.ok) {
        throw new Error("파일을 다운로드할 수 없습니다.");
      }

      const blob = await response.blob();

      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = file.name;
      link.click();

      // 메모리 해제
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("다운로드 중 오류 발생:", error);
    }
  };
  return (
    <S.Container>
      <S.TitleContainer onClick={handleDownload} style={{ cursor: "pointer" }}>
        <Clip stroke="var(--Primary)" /> <p>{file.name}</p>
      </S.TitleContainer>
    </S.Container>
  );
};

export default BusinessFileComponent;
