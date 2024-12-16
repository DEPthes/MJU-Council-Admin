import * as S from "@styles/Introduction/TitleBarComponentStyle";

interface Title {
    title: string;
    canEnter: boolean;
    setCanEnter: (value: boolean) => void;
    onSubmit: () => void; // 제출 버튼 클릭 시 호출되는 콜백 함수 추가
}

const FooterTitleBar: React.FC<Title> = ({ title, canEnter, setCanEnter, onSubmit }) => {
    const handleButtonClick = () => {
        onSubmit(); // 클릭 시 onSubmit 함수 호출
    };

    return (
        <S.TDiv>
            <S.TP>{title}</S.TP>
            <S.BtnDiv>
                {canEnter === false ? (
                    <S.TitleNotEnterBtn onClick={handleButtonClick}>등록</S.TitleNotEnterBtn>
                ) : (
                    <S.TitleBtnFix onClick={handleButtonClick}>등록</S.TitleBtnFix>
                )}
            </S.BtnDiv>
        </S.TDiv>
    );
};

export default FooterTitleBar;
