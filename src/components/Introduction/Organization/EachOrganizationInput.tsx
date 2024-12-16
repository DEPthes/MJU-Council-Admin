import * as S from "@/styles/Introduction/Organization/EachOrganizationInputComponentStyle";
import Close from "@assets/image/Close.svg";
import { postDepartment, putDepartment } from "@/apis/introduction";
import { ChangeEvent, useState } from "react";
import Add from "@assets/image/Add.svg";
import RemoveModal from "@/components/Home/Banner/RemoveModal";

interface Input {
  departmentId?: number;
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
  const [image, setImage] = useState<File>();

  // 입력 값 업데이트 함수
  const updateInput = (key: "image" | "title", value: any) => {
    props.setInputs((prev) =>
      prev.map((item) =>
        item === props.input ? { ...item, [key]: value } : item
      )
    );
  };

  // 이미지 업로드 처리 함수
  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateInput("image", reader.result as string);
      };
    }
    if (!file) return;

    try {
      // 부서 ID가 있을 경우 업데이트, 없으면 생성
      if (props.input.departmentId) {
        await putDepartment(props.input.departmentId, props.input.title, image);
        console.log("부서 업데이트 성공");
      } else {
        const response = await postDepartment(props.input.title, image);
        updateInput("image", response.imageUrl); // 서버에서 반환된 이미지 URL로 상태 업데이트
        console.log("부서 생성 성공");
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

  // 이미지와 캡션 필드 삭제 확인
  const handleConfirmRemove = () => {
    updateInput("image", null); // 이미지 초기화
    updateInput("title", ""); // 캡션 초기화
    setOpenModal(false); // 모달 닫기
  };

  return (
    <>
      <S.InputDiv>
        <S.TopDiv>
          <S.UploadBtnDiv>
            <S.Caption>이미지</S.Caption>
            {!props.input.imgUrl? (
              <S.AddWrapper>
                {props.isFix && (
                  <S.AddInput type="file" accept="image/*" onChange={handleUploadImage} />
                )}
                <S.AddImg src={Add} />
              </S.AddWrapper>
            ) : (
              <S.AddWrapper>
                <S.FullImg
                    src={
                      props.input.imgUrl
                      ? props.input.imgUrl instanceof File
                      ? URL.createObjectURL(props.input.imgUrl) // File 객체 처리
                      : props.input.imgUrl // 기존 URL 처리
                      : "/default-image.png" // 기본 이미지
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
              onChange={(e) => updateInput("title", e.target.value)} // 캡션 수정 시 상태 업데이트
              readOnly={!props.isFix}
            />
          </S.AddContentDiv>
          {openModal && (
            <RemoveModal
              text="이미지를 삭제하시겠습니까?"
              setIsModal={setOpenModal}
              onConfirm={handleConfirmRemove}
            />
          )}
        </S.TopDiv>
        {props.isFix && (
          <S.BtnDiv>
            <S.DeleteBtn onClick={props.clicked}>삭제</S.DeleteBtn>
          </S.BtnDiv>
        )}
        {props.isLast ? null : <S.Line />}
      </S.InputDiv>
    </>
  );
};

export default EachOrganizationInput;
