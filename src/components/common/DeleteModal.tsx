import * as S from "@/styles/common/ModalStyle";
import { useState } from "react";
import BigWhiteButton from "./Button/BigWhiteButton";
import BigBlueButton from "./Button/BigBlueButton";

interface DeleteModalProps {
  text?: string;
  onCancel: () => void;
  onSubmit: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  text = "이 페이지의 모든 공약들이 사라집니다.",
  onCancel,
  onSubmit,
}) => {
  const [check, setCheck] = useState("");

  const checkText = "확인했습니다";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.value);
  };

  const handleConfirm = () => {
    if (check === checkText) {
      onSubmit();
    } else {
      alert(`'${checkText}'를 정확히 입력해주세요.`);
    }
  };

  return (
    <S.Overlay>
      <S.Container>
        <S.Text>
          {text} <br />
          삭제하시겠습니까?
        </S.Text>
        <S.DeleteText>삭제하시려면 '{checkText}'를 입력해주세요.</S.DeleteText>
        <S.DeleteInput value={check} onChange={handleInputChange} />
        <S.ButtonContainer>
          <BigWhiteButton onClick={onCancel} text="취소" />
          <BigBlueButton onClick={handleConfirm} text="확인" />
        </S.ButtonContainer>
      </S.Container>
    </S.Overlay>
  );
};

export default DeleteModal;
