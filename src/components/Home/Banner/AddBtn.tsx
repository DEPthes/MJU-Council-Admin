import * as S from "@styles/Home/Banner/AddBtnComponentStyle";
import Add from "@assets/image/Add.svg";
import Close from "@assets/image/Close.svg";
import { useState, ChangeEvent } from "react";
import RemoveModal from "./RemoveModal";

const AddBtn: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);

  // 이미지 업로드 처리 함수
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 모달 열기
  const openRemoveModal = () => {
    setIsModal(true);
  };

  // 모달에서 이미지 삭제 처리
  const handleConfirmRemove = () => {
    setImage(""); // 이미지 삭제
    setIsModal(false); // 모달 닫기
  };

  return (
    <>
      {image === "" ? (
        <S.AddWrapper>
          <S.AddInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <S.AddImg src={Add} />
        </S.AddWrapper>
      ) : (
        <S.AddWrapper>
          <S.FullImg src={image} />
          <S.DeleteButton onClick={openRemoveModal}>
            <img src={Close} alt="Close" />
          </S.DeleteButton>
        </S.AddWrapper>
      )}

      {/* 모달 렌더링 */}
      {isModal && (
        <RemoveModal
          setIsModal={setIsModal}
          onConfirm={handleConfirmRemove}
        />
      )}
    </>
  );
};

export default AddBtn;
