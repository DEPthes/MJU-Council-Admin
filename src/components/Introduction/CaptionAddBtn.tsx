import * as S from "@styles/Introduction/CaptionAddBtnComponentStyle";

const CaptionAddBtn:React.FC<{clicked:React.MouseEventHandler<HTMLButtonElement>}> = ({clicked}) => {
    return(
        <>
          <S.CADiv>
            <S.CABtn onClick={clicked}>추가</S.CABtn>
          </S.CADiv>
        </>
    );
};

export default CaptionAddBtn;