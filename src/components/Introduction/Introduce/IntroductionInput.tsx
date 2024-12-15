import AddContent from "../AddContent";
import ImgAddBtn from "../ImgAddBtn";
import * as S from "@styles/Introduction/Introduce/IntroductionInputComponentStyle";

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

const IntroductionInput: React.FC<IntroInput> = (props) => {

  const updateInput = (key: "image" | "content", value: any) => {
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
            title="이미지"
            text="총학생회 소개 이미지를 삭제하시겠습니까?"
            image={props.input.image}
            setImage={(newImage) => updateInput("image", newImage)}
            isFix={props.isFix}
          />
          <AddContent 
            value={props.input.content} 
            onChange={(e) => updateInput("content", e.target.value)}
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

export default IntroductionInput;