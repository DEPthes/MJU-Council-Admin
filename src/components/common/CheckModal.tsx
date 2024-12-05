import * as S from "@styles/common/CheckModalStyle";
import React from "react";
import CancelButton from "./Button/CancelButton";
import OkButton from "./Button/OkButton";

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
          <CancelButton onClick={onCancel} />
          <OkButton onClick={onSubmit} />
        </S.ButtonContainer>
      </S.Container>
    </S.Overlay>
  );
};

export default CheckModal;
