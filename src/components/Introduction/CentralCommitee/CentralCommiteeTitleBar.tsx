import * as S from "@styles/Introduction/TitleBarComponentStyle";

interface Title{
    title: string;
    isFix: boolean;
    setIsFix: (value: boolean) => void;
    canEnter: boolean;
    setCanEnter: (value: boolean) => void;
}

const CentralCommiteeTitleBar:React.FC<Title> = (props) => {

    const handleFixClick = () => {
        props.setIsFix(!props.isFix);
    }

    const handleButtonClick = () => {

    }

    return(
        <>
            <S.TDiv>
                <S.TP>{props.title}</S.TP>
                <S.BtnDiv>
                    {props.isFix==false ? 
                    (<S.TitleBtnFix onClick={handleFixClick}>수정</S.TitleBtnFix>):
                    (props.canEnter==false?
                    (<S.TitleNotEnterBtn onClick={handleButtonClick}>등록</S.TitleNotEnterBtn>):
                    (<S.TitleBtnFix onClick={handleButtonClick}>등록</S.TitleBtnFix>))
                    }
                </S.BtnDiv>
            </S.TDiv>
        </>
    );
};

export default CentralCommiteeTitleBar;