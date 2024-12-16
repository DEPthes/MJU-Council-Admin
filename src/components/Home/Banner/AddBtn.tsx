import * as S from "@styles/Home/Banner/AddBtnComponentStyle";
import Add from "@assets/image/Add.svg";
import Close from "@assets/image/Close.svg";
import { useState, ChangeEvent, useEffect } from "react";
import RemoveModal from "./RemoveModal";
import { createBanner, updateBanner, deleteBanner } from "@/apis/home";

interface AddBtnProps {
  id: number | null; // 배너 ID (null은 새 배너를 의미)
  image: string; // 초기 이미지 URL
}

const AddBtn: React.FC<AddBtnProps> = ({ id, image: initialImage }) => {
  const [image, setImage] = useState<string>(initialImage);
  const [bannerId, setBannerId] = useState<number | null>(id);
  const [isModal, setIsModal] = useState<boolean>(false);

  // 이미지 업로드
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  // 파일 선택 후 UI 업데이트
  setImage(URL.createObjectURL(file)); // 이미지 미리보기 URL로 업데이트

  try {
    if (bannerId) {
      // 배너 업데이트
      await updateBanner(bannerId, file); // 파일 객체를 전달
      console.log("배너 업데이트 성공");
    } else {
      // 배너 생성
      const response = await createBanner(file); // 파일 객체를 전달
      setBannerId(response.bannerId); // 새 배너 ID 저장
      console.log("배너 생성 성공");
      window.location.reload();
    }
  } catch (error) {
    console.error("배너 업로드 실패:", error);
  }
};


  // 배너 삭제
  const handleConfirmRemove = async () => {
    if (bannerId) {
      try {
        await deleteBanner(bannerId);
        console.log(bannerId)
        setImage(""); // UI 초기화
        setBannerId(null); // ID 초기화
        window.location.reload();
        console.log("배너 삭제 성공");
      } catch (error) {
        console.error("배너 삭제 실패:", error);
      }
    }
    setIsModal(false); // 모달 닫기
  };

  return (
    <>
      {image === "" ? (
        <S.AddWrapper>
          <S.AddInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload} // 이미지 업로드 처리
          />
          <S.AddImg src={Add} />
        </S.AddWrapper>
      ) : (
        <S.AddWrapper>
          <S.FullImg src={image} />
          <S.DeleteButton onClick={() => setIsModal(true)}>
            <img src={Close} alt="Close" />
          </S.DeleteButton>
        </S.AddWrapper>
      )}

      {/* 삭제 모달 */}
      {isModal && (
        <RemoveModal
          text="이미지를 삭제하시겠습니까?"
          setIsModal={setIsModal}
          onConfirm={handleConfirmRemove} // 삭제 처리 연결
        />
      )}
    </>
  );
};

export default AddBtn;
