import * as S from "@styles/Introduction/TitleBarComponentStyle";

interface Title{
    title: string;
    isFix: boolean;
    setIsFix: (value: boolean) => void;
    canEnter: boolean;
    setCanEnter: (value: boolean) => void;
    setPost: (value: boolean) => void;
    post: boolean
}

const IntroduceTitleBar:React.FC<Title> = (props) => {

    const handleFixClick = () => {
        props.setIsFix(!props.isFix);
    }

    const handleButtonClick = async () => {
        props.setPost(!props.post);
    }

    return(
        <>
            <S.TDiv>
                <S.TP>{props.title}</S.TP>
                <S.BtnDiv>
                    {props.isFix==false ? 
                    (<S.TitleBtnFix onClick={handleFixClick}>수정</S.TitleBtnFix>):
                    (props.canEnter==false?
                    (<S.TitleNotEnterBtn>등록</S.TitleNotEnterBtn>):
                    (<S.TitleBtnFix onClick={handleButtonClick}>등록</S.TitleBtnFix>))
                    }
                </S.BtnDiv>
            </S.TDiv>
        </>
    );
};

export default IntroduceTitleBar;