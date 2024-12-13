import ImgAddBtn from "../ImgAddBtn";
import * as S from "@styles/Introduction/Organization/EachOrganizationInputComponentStyle";
import AddEachOrgContent from "./AddEachOrgContent";

interface Input{
  image: string; 
  content: string;
}

interface IntroInput{
  isFix: boolean;
  canEnter: boolean;
  setCanEnter: (value: boolean)=>void;
  clicked: ()=>void;
  input: Input;
  setInputs: React.Dispatch<React.SetStateAction<Input[]>>;
  isLast: boolean;
}

const EachOrganizationInput: React.FC<IntroInput> = (props) => {
  const updateInput = (key: "image" | "content", value: any) => {
    props.setInputs((prev) =>
      prev.map((item) =>
        item === props.input ? { ...item, [key]: value } : item
      )
    );
  };

  return (
    <>
      <S.OrgDiv>
        <S.TopDiv>
          <ImgAddBtn 
            title="조직도 이미지"
            text="국별 조직도 이미지를 삭제하시겠습니까?"
            image={props.input.image}
            setImage={(newImage) => updateInput("image", newImage)}
            isFix={props.isFix}
          />
          <AddEachOrgContent 
            value={props.input.content} 
            onChange={(e) => updateInput("content", e.target.value)}
            isFix= {props.isFix}
          />
        </S.TopDiv>
        {props.isFix && (
          <S.BtnDiv>
            <S.DeleteBtn onClick={props.clicked}>삭제</S.DeleteBtn>
          </S.BtnDiv>
        )}
        {props.isLast?<></>:<S.Line/>}
      </S.OrgDiv>
    </>
  );
};

export default EachOrganizationInput;