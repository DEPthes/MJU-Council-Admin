import * as S from "@styles/Home/Banner/RemoveModalComponentSytle";

interface Remove {
  setIsModal: (value: boolean) => void;
  onConfirm: () => void;
}

const RemoveModal: React.FC<Remove> = (props) => {
  return (
    <>
      <S.Overlay onClick={() => props.setIsModal(false)} />
      
      <S.MDiv>
        <S.TextDiv>
          <S.MText>이미지를 삭제하시겠습니까?</S.MText>
          <S.BtnDiv>
            <S.MButton onClick={() => props.setIsModal(false)}>취소</S.MButton>
            <S.MCButton onClick={props.onConfirm}>확인</S.MCButton>
          </S.BtnDiv>
        </S.TextDiv>
      </S.MDiv>
    </>
  );
};

export default RemoveModal;
