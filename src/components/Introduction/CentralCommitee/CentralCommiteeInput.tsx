import AddContent from "../AddContent";
import ImgAddBtn from "../ImgAddBtn";
import * as S from "@styles/Introduction/CentralCommitee/CentralCommiteeInputComponentStyle";

interface Input{
  image: string; 
  content: string;
}

interface CentralInput{
  isFix: boolean;
  canEnter: boolean;
  setCanEnter: (value: boolean)=>void;
  input: Input;
  setInputs: React.Dispatch<React.SetStateAction<Input[]>>;
}

const CentralCommiteeInput: React.FC<CentralInput> = (props) => {
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
            title="로고"
            text="이미지를 삭제하시겠습니까?"
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
      </S.InputDiv>
    </>
  );
};

export default CentralCommiteeInput;