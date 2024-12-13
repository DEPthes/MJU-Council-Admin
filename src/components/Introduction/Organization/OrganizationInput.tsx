import ImgAddBtn from "../ImgAddBtn";
import * as S from "@styles/Introduction/Organization/OrganizationInputComponentStyle";

interface IntroInput{
  isFix: boolean;
  canEnter: boolean;
  setCanEnter: (value: boolean)=>void;
  clicked: ()=>void;
  input: string|undefined;
  setInputs: React.Dispatch<React.SetStateAction<string|undefined>>;
}

const OrganizationInput: React.FC<IntroInput> = (props) => {

  return (
    <>
      <S.OrgDiv>
        <S.TopDiv>
          <ImgAddBtn 
            title="이미지"
            text="조직도 이미지를 삭제하시겠습니까?"
            image={props.input}
            setImage={props.setInputs}
            isFix={props.isFix}
          />
          <S.FakeDiv></S.FakeDiv>
        </S.TopDiv>
      </S.OrgDiv>
    </>
  );
};

export default OrganizationInput;