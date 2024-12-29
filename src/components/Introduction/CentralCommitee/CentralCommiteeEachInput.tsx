import AddCollageContent from "./AddCollageContent";
import ImgAddBtn from "../ImgAddBtn";
import * as S from "@styles/Introduction/CentralCommitee/CentralCommiteeEachInputComopnentStyle";

interface EInput {
  committeeId: string;
  imgUrl: File|undefined;
  college: string;
  name?: string;
  pageUrl?: string;
  snsUrl?: string;
}

interface CentralInput {
  isFix: boolean;
  canEnter: boolean;
  setCanEnter: (value: boolean) => void;
  clicked: () => void;
  input: EInput;
  setInputs: React.Dispatch<React.SetStateAction<EInput[]>>;
  isLast: boolean;
}

const CentralCommiteeEachInput: React.FC<CentralInput> = (props) => {
  const updateInput = (key: keyof EInput, value: any) => {
    props.setInputs((prev) =>
      prev.map((item) =>
        item.committeeId === props.input.committeeId
          ? { ...item, [key]: value }
          : item
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
            image={props.input.imgUrl}
            setImage={(newImage) => updateInput("imgUrl", newImage)} // Update imgUrl
            isFix={props.isFix}
          />
          <AddCollageContent
            valueTitle={props.input.name}
            valueHomePage={props.input.pageUrl}
            valueInstagram={props.input.snsUrl}
            valuePart={props.input.college}
            onChangePart={(e) => updateInput("college", e.target.value)} // Update college
            onChangeTitle={(e) => updateInput("name", e.target.value)} // Update name
            onChangeHomePage={(e) => updateInput("pageUrl", e.target.value)} // Update pageUrl
            onChangeInstagram={(e) => updateInput("snsUrl", e.target.value)} // Update snsUrl
            isFix={props.isFix}
          />
        </S.TopDiv>
        {props.isFix && (
          <S.BtnDiv>
            <S.DeleteBtn onClick={props.clicked}>삭제</S.DeleteBtn>
          </S.BtnDiv>
        )}
        {!props.isLast && <S.Line />}
      </S.InputDiv>
    </>
  );
};

export default CentralCommiteeEachInput;
