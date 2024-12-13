import AddCollageContent from "./AddCollageContent";
import ImgAddBtn from "../ImgAddBtn";
import * as S from "@styles/Introduction/CentralCommitee/CentralCommiteeEachInputComopnentStyle";

interface EInput{
    image: string;
    part: string;
    councilTitle: string;
    homePage: string;
    instagram: string;
}

interface CentralInput{
  isFix: boolean;
  canEnter: boolean;
  setCanEnter: (value: boolean)=>void;
  clicked: ()=>void;
  input: EInput;
  setInputs: React.Dispatch<React.SetStateAction<EInput[]>>;
  isLast: boolean;
}

const CentralCommiteeEachInput: React.FC<CentralInput> = (props) => {
  const updateInput = (key: "image" | "part" | "councilTitle" | "homePage" | "instagram", value: any) => {
    props.setInputs((prev) =>
      prev.map((item) =>
        item === props.input ? { ...item, [key]: value } : item
      )
    );
  };

  return (
    <>
      <S.InputDiv>
        <S.TopDiv>
          <ImgAddBtn 
            title="로고"
            text="이미지를 삭제하시겠습니까?"
            image={props.input.image}
            setImage={(newImage) => updateInput("image", newImage)} 
            isFix={props.isFix}
          />
          <AddCollageContent 
            valueTitle={props.input.councilTitle} 
            valueHomePage={props.input.homePage} 
            valueInstagram={props.input.instagram}
            valuePart={props.input.part}
            onChangePart={(e) => updateInput("part", e.target.value)}
            onChangeTitle={(e) => updateInput("councilTitle", e.target.value)}
            onChangeHomePage={(e) => updateInput("homePage", e.target.value)}
            onChangeInstagram={(e) => updateInput("instagram", e.target.value)}
            isFix={props.isFix}
          />
        </S.TopDiv>
        {props.isFix && (
          <S.BtnDiv>
            <S.DeleteBtn onClick={props.clicked}>삭제</S.DeleteBtn>
          </S.BtnDiv>
        )}
        {props.isLast?<></>:<S.Line/>}
      </S.InputDiv>
    </>
  );
};

export default CentralCommiteeEachInput;