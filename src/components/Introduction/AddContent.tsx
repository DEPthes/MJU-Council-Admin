import * as S from "@styles/Introduction/AddContentComponentStyle";

interface Info{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isFix: boolean;
}
const AddContent:React.FC<Info> = (props) => {
    return(
        <>
          <S.AddContentDiv>
            <S.Caption>캡션</S.Caption>
            {props.isFix?
            <S.Input 
              placeholder="이미지에 대한 내용을 작성해주세요."
              value={props.value}
              onChange={props.onChange}
            />:
            <S.Input 
              placeholder="이미지에 대한 내용을 작성해주세요."
              value={props.value}
              onChange={props.onChange}
              readOnly
            />}
          </S.AddContentDiv>
        </>
    );
};

export default AddContent;