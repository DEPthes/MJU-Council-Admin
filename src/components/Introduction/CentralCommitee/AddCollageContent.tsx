import * as S from "@styles/Introduction/CentralCommitee/AddCollageContentComponentStyle";

interface Info {
  valuePart: string;
  valueTitle: string | undefined;
  valueHomePage: string | undefined;
  valueInstagram: string;
  onChangePart: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeHomePage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInstagram: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFix: boolean;
}
const AddCollageContent: React.FC<Info> = (props) => {
  return (
    <>
      <S.AddCollageContentDiv>
        <S.Caption>정보</S.Caption>
        <S.EachDiv>
          <S.CollageText>단과대학명</S.CollageText>
          {props.isFix ? (
            <S.Input
              placeholder="단과대학명을 입력해주세요."
              value={props.valuePart ?? ""}
              onChange={props.onChangePart}
            />
          ) : (
            <S.Input
              placeholder="단과대학명을 입력해주세요."
              value={props.valuePart ?? ""}
              onChange={props.onChangePart}
              readOnly
            />
          )}
        </S.EachDiv>
        <S.EachDiv>
          <S.CollageText>학생회명</S.CollageText>
          {props.isFix ? (
            <S.Input
              placeholder="학생회명을 입력해주세요."
              value={props.valueTitle ?? ""}
              onChange={props.onChangeTitle}
            />
          ) : (
            <S.Input
              placeholder="학생회명을 입력해주세요."
              value={props.valueTitle ?? ""}
              onChange={props.onChangeTitle}
              readOnly
            />
          )}
        </S.EachDiv>
        <S.EachDiv>
          <S.CollageText>홈페이지 주소</S.CollageText>
          {props.isFix ? (
            <S.Input
              placeholder="홈페이지 주소를 입력해주세요."
              value={props.valueHomePage ?? ""}
              onChange={props.onChangeHomePage}
            />
          ) : (
            <S.Input
              placeholder="홈페이지 주소를 입력해주세요."
              value={props.valueHomePage ?? ""}
              onChange={props.onChangeHomePage}
              readOnly
            />
          )}
        </S.EachDiv>
        <S.EachDiv>
          <S.CollageText>인스타그램 주소</S.CollageText>
          {props.isFix ? (
            <S.Input
              placeholder="인스타그램 주소를 입력해주세요."
              value={props.valueInstagram ?? ""}
              onChange={props.onChangeInstagram}
            />
          ) : (
            <S.Input
              placeholder="인스타그램 주소를 입력해주세요."
              value={props.valueInstagram ?? ""}
              onChange={props.onChangeInstagram}
              readOnly
            />
          )}
        </S.EachDiv>
      </S.AddCollageContentDiv>
    </>
  );
};

export default AddCollageContent;
