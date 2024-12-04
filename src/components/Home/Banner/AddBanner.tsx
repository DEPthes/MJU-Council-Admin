import * as S from "@styles/Home/Banner/AddBannerComponentStyle";
import AddBtn from "./AddBtn";
import FixFooterBtn from "../Footer/FixFooterBtn";

const AddBanner = () => {
    return(
        <>
            <S.WholeDiv>
                <S.BannerDiv>
                    <AddBtn/>
                    <AddBtn/>
                    <AddBtn/>
                    <AddBtn/>
                </S.BannerDiv>
                <S.FixDiv>
                    <FixFooterBtn/>
                </S.FixDiv>
            </S.WholeDiv>
            
        </>
    );
};

export default AddBanner;