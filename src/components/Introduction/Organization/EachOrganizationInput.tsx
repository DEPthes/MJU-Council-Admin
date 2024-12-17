import * as S from "@/styles/Introduction/Organization/EachOrganizationInputComponentStyle";
import Close from "@assets/image/Close.svg";
import { ChangeEvent, useEffect, useState } from "react";
import Add from "@assets/image/Add.svg";
import RemoveModal from "@/components/Home/Banner/RemoveModal";

interface Input {
  organizationId: string;
  imgUrl: File|undefined;
  title: string;
}

interface EachInput {
  isFix: boolean;
  canEnter: boolean;
  setCanEnter: (value: boolean) => void;
  clicked: () => void;
  input: Input;
  setInputs: React.Dispatch<React.SetStateAction<Input[]>>;
  isLast: boolean;
}

const EachOrganizationInput: React.FC<EachInput> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // 입력 값 업데이트 함수
  const updateInput = (key: "imgUrl" | "title", value: any) => {
    props.setInputs((prev) =>
      prev.map((item) =>
        item === props.input ? { ...item, [key]: value } : item
      )
    );
  };

  // 이미지 업로드 처리 함수
  const handleUploadImage = async(e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateInput("imgUrl", file); // File 객체 업데이트
      const url = URL.createObjectURL(file);
      console.log(url)
      setPreviewUrl(url);
    }
  };


  // 이미지 삭제
  const handleRemoveImage = () => {
    updateInput("imgUrl", undefined); // 상태에서 이미지 제거
    setPreviewUrl(null);
    setOpenModal(false);
    console.log(props.input.imgUrl);
  };

  useEffect(()=>{
    console.log(props.input.imgUrl);
  },[props.input])

  return (
    <S.InputDiv>
      <S.TopDiv>
        <S.UploadBtnDiv>
          <S.Caption>이미지</S.Caption>
          {!props.input.imgUrl ? (
            <S.AddWrapper>
              {props.isFix && (
                <>
                  <S.AddInput type="file" accept="image/*" onChange={handleUploadImage} />
                  <S.AddImg src={Add} />
                </>
              )}
            </S.AddWrapper>
          ) : (
            <S.AddWrapper>
              <S.FullImg
                src={
                  previewUrl ||
                  (props.input.imgUrl instanceof File
                    ? URL.createObjectURL(props.input.imgUrl) // File 객체만 처리
                    : props.input.imgUrl) // 기존 URL 처리
                }
              />
              {props.isFix && (
                <S.DeleteButton onClick={() => setOpenModal(true)}>
                  <img src={Close} />
                </S.DeleteButton>
              )}
            </S.AddWrapper>
          )}
        </S.UploadBtnDiv>
        <S.AddContentDiv>
          <S.Caption2>캡션</S.Caption2>
          <S.Input
            placeholder="이미지에 대한 내용을 작성해주세요."
            value={props.input.title}
            onChange={(e) => updateInput("title", e.target.value)}
            readOnly={!props.isFix}
          />
        </S.AddContentDiv>
      </S.TopDiv>

      {openModal && (
        <RemoveModal
          text="이미지를 삭제하시겠습니까?"
          setIsModal={setOpenModal}
          onConfirm={handleRemoveImage}
        />
      )}
      {props.isFix && (
          <S.BtnDiv>
            <S.DeleteBtn onClick={props.clicked}>삭제</S.DeleteBtn>
          </S.BtnDiv>
        )}
        {props.isLast ? null : <S.Line />}
    </S.InputDiv>
  );
};


export default EachOrganizationInput;