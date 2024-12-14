import * as S from "@styles/common/CheckModalStyle";
import React from "react";
import BigWhiteButton from "./Button/BigWhiteButton";
import BigBlueButton from "./Button/BigBlueButton";

interface CheckModalProps {
  // 줄바꿈을 원하는 위치에 <br />
  text: string;
  onSubmit: () => void;
  onCancel: () => void;
}

const CheckModal: React.FC<CheckModalProps> = ({
  text,
  onSubmit,
  onCancel,
}) => {
  console.log(text);
  return (
    <S.Overlay>
      <S.Container>
        <S.Text dangerouslySetInnerHTML={{ __html: text }} />
        <S.ButtonContainer>
          <BigWhiteButton onClick={onCancel} text="취소" />
          <BigBlueButton onClick={onSubmit} text="확인" />
        </S.ButtonContainer>
      </S.Container>
    </S.Overlay>
  );
};

export default CheckModal;
