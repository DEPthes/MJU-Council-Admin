import * as S from "@styles/Introduction/TitleBarComponentStyle";

const TitleBar:React.FC<{title: string}> = (prop) => {
    return(
        <>
            <S.TDiv>
                <S.TP>{prop.title}</S.TP>
            </S.TDiv>
        </>
    );
};

export default TitleBar;