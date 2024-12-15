import * as S from "@styles/Introduction/Organization/AddEachOrgContentComponentStyle";

interface Info{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFix: boolean;
}
const AddEachOrgContent:React.FC<Info> = (props) => {
    return(
        <>
          <S.AddEachOrgContentDiv>
            <S.Caption>국명</S.Caption>
            {props.isFix?
            <S.Input 
              placeholder="국명을 입력하세요."
              value={props.value}
              onChange={props.onChange}
            />:
            <S.Input 
              placeholder="국명을 입력하세요."
              value={props.value}
              onChange={props.onChange}
              readOnly
            />}
          </S.AddEachOrgContentDiv>
        </>
    );
};

export default AddEachOrgContent;