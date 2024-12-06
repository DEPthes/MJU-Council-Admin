import React, { useState } from "react";
import * as S from "@styles/Footer/InfoInputComponentStyle";
import UploadFileIcon from "@assets/image/Button_File.svg";
import Close from "@assets/image/Close.svg";

const InfoInput = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string); // 이미지를 base64로 변환하여 상태에 저장
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedImage(null);
  }

  return (
    <>
      <S.WholeDiv>
        <S.InfoDiv>
          <S.IText>기수</S.IText>
          <S.Input placeholder="숫자" />
        </S.InfoDiv>
        <S.InfoDiv>
          <S.IText>총학생회명</S.IText>
          <S.Input placeholder="이름을 입력해주세요" />
        </S.InfoDiv>
        <S.InfoDiv>
          <S.IText>총학생회 로고</S.IText>
            {uploadedImage == null ? 
            (<S.FileUploadWrapper>
              <S.FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <S.UploadImg src={UploadFileIcon}/>
            </S.FileUploadWrapper>):
            (<S.FileUploadWrapper>
              <S.UploadPreviewWrapper>
                <S.UploadPreview src={uploadedImage}/>
                <S.DeleteButton onClick={handleRemoveFile}>
                  <img src={Close} alt="Close" />
                </S.DeleteButton>
              </S.UploadPreviewWrapper>
            </S.FileUploadWrapper>)
            }
        </S.InfoDiv>
        <S.InfoDiv>
          <S.IText>이메일</S.IText>
          <S.Input placeholder="이메일을 입력해주세요" />
        </S.InfoDiv>
        <S.InfoDiv>
          <S.IText>인스타그램 주소</S.IText>
          <S.Input placeholder="인스타그램 채널 URL주소를 입력해주세요" />
        </S.InfoDiv>
        <S.InfoDiv>
          <S.IText>카카오톡 주소</S.IText>
          <S.Input placeholder="카카오톡 채널 주소를 입력해주세요" />
        </S.InfoDiv>
        <S.InfoDiv>
          <S.IText>전화번호</S.IText>
          <S.Input placeholder="02-300-0901" value="02-300-0901" readOnly/>
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
    </>
  );
};

export default InfoInput;
