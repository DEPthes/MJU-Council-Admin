import InfoInput from "@/components/Footer/InfoInput";
import TitleBar from "@/components/Introduction/TitleBar";
import * as S from "@styles/Footer/FooterPageComponentStyle";

const FooterPage = () => {
    return(
        <>
          <S.FDiv>
            <TitleBar title="총학생회 정보"/>
            <InfoInput/>
          </S.FDiv>
        </>
    );
};

export default FooterPage;