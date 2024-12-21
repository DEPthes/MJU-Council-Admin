import * as S from "@styles/Home/Banner/RemoveModalComponentSytle";

interface Remove {
  setIsModal: (value: boolean) => void;
  onConfirm: () => void;
  onIgnore: () => void;
}

const NavModal: React.FC<Remove> = (props) => {
  return (
    <>
      <S.Overlay onClick={() => props.setIsModal(false)} />
      
      <S.MDiv>
        <S.TextDiv>
          <S.MText>아직 글이 등록되지 않았습니다.<br></br>등록 버튼을 눌러 게시를 완료 하세요.</S.MText>
          <S.BtnDiv>
            <S.MButton onClick={props.onIgnore}>취소</S.MButton>
            <S.MCButton onClick={props.onConfirm}>확인</S.MCButton>
          </S.BtnDiv>
        </S.TextDiv>
      </S.MDiv>
    </>
  );
};

export default NavModal;
