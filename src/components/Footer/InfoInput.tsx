import React, { useEffect, useState } from "react";
import * as S from "@styles/Footer/InfoInputComponentStyle";
import UploadFileIcon from "@assets/image/Button_File.svg";
import Close from "@assets/image/Close.svg";

interface InfoInputProps {
  setGeneration: React.Dispatch<React.SetStateAction<number | string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSnsUrl: React.Dispatch<React.SetStateAction<string>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}

interface InfoInputProps {
  setGeneration: React.Dispatch<React.SetStateAction<number | string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSnsUrl: React.Dispatch<React.SetStateAction<string>>;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  initialValues: {
    generation: number | string;
    name: string;
    email: string;
    snsUrl: string;
    logoUrl: string | null;
  }; // 초기값
}

const InfoInput: React.FC<InfoInputProps> = ({
  setGeneration,
  setName,
  setEmail,
  setSnsUrl,
  setImageFile, //보낼 img 파일을 세팅함
  initialValues,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>( //보여지는 이미지, string, 받아올 때도 url이니까 string임
    initialValues.logoUrl || null
  );

  useEffect(() => {
    // 초기값 설정
    setGeneration(initialValues.generation);
    setName(initialValues.name);
    setEmail(initialValues.email);
    setSnsUrl(initialValues.snsUrl);
  }, [
    initialValues.generation,
    initialValues.name,
    initialValues.email,
    initialValues.snsUrl,
    setGeneration,
    setName,
    setEmail,
    setSnsUrl,
  ]);

  useEffect(() => {
    setUploadedImage(initialValues.logoUrl);
  }, [initialValues.logoUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string); //화면에 보여지는
        setImageFile(file); // 파일 상태 업데이트
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedImage(null);
    setImageFile(null);
  };

  return (
    <S.WholeDiv>
      <S.InfoDiv>
        <S.IText>기수</S.IText>
        <S.Input
          placeholder="숫자"
          value={initialValues.generation}
          onChange={(e) => setGeneration(e.target.value)} // 기수 입력
        />
      </S.InfoDiv>
      <S.InfoDiv>
        <S.IText>총학생회명</S.IText>
        <S.Input
          placeholder="이름을 입력해주세요"
          value={initialValues.name}
          onChange={(e) => setName(e.target.value)} // 총학생회명 입력
        />
      </S.InfoDiv>
      <S.InfoDiv>
        <S.IText>총학생회 로고</S.IText>
        {uploadedImage === null ? (
          <S.FileUploadWrapper>
            <S.FileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <S.UploadImg src={UploadFileIcon} />
          </S.FileUploadWrapper>
        ) : (
          <S.FileUploadWrapper>
            <S.UploadPreviewWrapper>
              <S.UploadPreview src={uploadedImage} />
              <S.DeleteButton onClick={handleRemoveFile}>
                <img src={Close} />
              </S.DeleteButton>
            </S.UploadPreviewWrapper>
          </S.FileUploadWrapper>
        )}
      </S.InfoDiv>
      <S.InfoDiv>
        <S.IText>이메일</S.IText>
        <S.Input
          placeholder="이메일을 입력해주세요"
          value={initialValues.email}
          onChange={(e) => setEmail(e.target.value)} // 이메일 입력
        />
      </S.InfoDiv>
      <S.InfoDiv>
        <S.IText>인스타그램 주소</S.IText>
        <S.Input
          placeholder="인스타그램 채널 URL주소를 입력해주세요"
          value={initialValues.snsUrl}
          onChange={(e) => setSnsUrl(e.target.value)} // SNS URL 입력
        />
      </S.InfoDiv>
      <S.InfoDiv>
        <S.IText>전화번호</S.IText>
        <S.Input placeholder="02-300-0901" value="02-300-0901" readOnly />
      </S.InfoDiv>
      <S.InfoDiv>
        <S.IText>총학생회실 주소</S.IText>
        <S.Input
          placeholder="서울특별시 서대문구 거북골로34 학생회관 5층 S2505 총학생회실"
          value="서울특별시 서대문구 거북골로34 학생회관 5층 S2505 총학생회실"
          readOnly
        />
      </S.InfoDiv>
    </S.WholeDiv>
  );
};

export default InfoInput;
