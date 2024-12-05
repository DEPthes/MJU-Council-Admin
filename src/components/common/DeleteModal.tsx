import * as S from "@styles/ActivityReport/PolicyList/PolicyDeleteModalStyle";
import { useState } from "react";
import CancelButton from "./Button/CancelButton";
import OkButton from "./Button/OkButton";

interface DeleteModalProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onCancel, onSubmit }) => {
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
          이 페이지의 모든 공약들이 사라집니다. <br />
          삭제하시겠습니까?
        </S.Text>
        <S.DeleteText>삭제하시려면 '{checkText}'를 입력해주세요.</S.DeleteText>
        <S.DeleteInput value={check} onChange={handleInputChange} />
        <S.ButtonContainer>
          <CancelButton onClick={onCancel} />
          <OkButton onClick={handleConfirm} />
        </S.ButtonContainer>
      </S.Container>
    </S.Overlay>
  );
};

export default DeleteModal;
