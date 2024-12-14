import BlueButton from "@/components/common/Button/BlueButton";
import WhiteButton from "@/components/common/Button/WhiteButton";
import * as S from "@/styles/News/NoticePageStyle";

const NewNoticePage = () => {
  return (
    <S.Container>
      <S.ButtonContainer>
        <WhiteButton
          text="작성 취소"
          color="var(--M50)"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <BlueButton
          text="등록"
          color="var(--Primary)"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          disabled={true}
        />
      </S.ButtonContainer>
      <hr />
    </S.Container>
  );
};

export default NewNoticePage;
